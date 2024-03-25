const express = require('express');
const dbPool = require('./db/dbPool'); 
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Function to crawl memes from Reddit and store them in the database
async function crawlAndStoreMemes() {
  try {
    const response = await axios.get('https://www.reddit.com/r/memes/top.json?t=day&limit=20', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
      },
    });
    const data = response.data;
    const memes = data.data.children.map(post => ({
      id: post.data.id,
      title: post.data.title,
      url: post.data.url,
      author: post.data.author,
      created_utc: new Date(post.data.created_utc * 1000), // Convert UNIX timestamp to JavaScript Date object
      upvotes: post.data.ups,
    }));

    // Store memes in the database
    await Promise.all(memes.map(async meme => {
      const existingMeme = await dbPool.query('SELECT id FROM memes WHERE id = $1', [meme.id]);
      if (existingMeme.rows.length === 0) {
        // If no exist, insert it into the database
        await dbPool.query('INSERT INTO memes (id, title, url, author, created_utc, upvotes) VALUES ($1, $2, $3, $4, $5, $6)', [meme.id, meme.title, meme.url, meme.author, meme.created_utc, meme.upvotes]);
        console.log(`Meme with ID ${meme.id} stored successfully.`);
      } else {
        // If exists, update its upvote count
        await dbPool.query('UPDATE memes SET upvotes = $1 WHERE id = $2', [meme.upvotes, meme.id]);
        console.log(`Meme with ID ${meme.id} already exists. Upvote count updated.`);
      }
    }));

    console.log('Memes crawled and stored successfully.');
  } catch (error) {
    console.error('Failed to crawl and store memes:', error);
  }
}

// /memes?limit= 
app.get('/memes', async (req, res) => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - (24 * 60 * 60 * 1000)).toISOString();

    const limit = parseInt(req.query.limit, 10) || 20;

    //Ensure cant request too much
    const safeLimit = Math.min(Math.max(limit, 1), 100);

    const result = await dbPool.query(
      'SELECT * FROM memes WHERE created_utc >= $1 ORDER BY upvotes DESC LIMIT $2',
      [twentyFourHoursAgo, safeLimit]
    );
    const memes = result.rows;

    return res.json({ memes });
  } catch (error) {
    console.error('Failed to fetch memes from the database:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Schedule meme crawling every hour
async function crawlMemesPeriodically() {
  try {
    console.log('Crawling memes...');
    await crawlAndStoreMemes();
  } catch (error) {
    console.error('Failed to crawl memes:', error);
  } finally {
    setTimeout(crawlMemesPeriodically, 3600000 - 30000); // 1 hour - 30 seconds
  }
}

// Initial call after waiting for 30 seconds
setTimeout(crawlMemesPeriodically, 30000); 

// Start the server
const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));