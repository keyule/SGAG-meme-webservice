//import  { useState, useEffect } from 'react';
import { TracingBeam } from "./ui/tracing-beam";
//import { LoadingSpinner } from './ui/LoadingSpinner';
import UpvoteArrow from '../assets/upVoteArrow';

interface Meme {
  id: string;
  title: string;
  url: string;
  author: string;
  created_utc: string;
  upvotes: number;
}

const memes: Meme[] = [
  {
    "id": "1blcqxt",
    "title": "Literally can't even right now",
    "url": "https://i.redd.it/y23oys9xtypc1.png",
    "author": "Jamminmb",
    "created_utc": "2024-03-22T22:55:31.000Z",
    "upvotes": 14433
  },
  {
    "id": "1blu5l6",
    "title": "Could’ve been worse",
    "url": "https://i.redd.it/cb8vax8pl3qc1.jpeg",
    "author": "ThirdFloorSchwartz",
    "created_utc": "2024-03-23T14:58:19.000Z",
    "upvotes": 14153
  },
  {
    "id": "1blkl3o",
    "title": "Opera got jokes.",
    "url": "https://i.redd.it/hwbv0oa3r0qc1.png",
    "author": "GenuineElf80093",
    "created_utc": "2024-03-23T05:23:14.000Z",
    "upvotes": 8076
  },
  {
    "id": "1blovhn",
    "title": "I had plans for that money",
    "url": "https://i.redd.it/qti1si1e72qc1.jpeg",
    "author": "Got-a-PhD-in-THC",
    "created_utc": "2024-03-23T10:16:20.000Z",
    "upvotes": 6255
  },
  {
    "id": "1blu100",
    "title": "Everyone stopped talking about it",
    "url": "https://i.redd.it/r9fxqwwmk3qc1.jpeg",
    "author": "NateAllDays",
    "created_utc": "2024-03-23T14:52:21.000Z",
    "upvotes": 5586
  },
  {
    "id": "1blj62s",
    "title": "Tread lightly",
    "url": "https://i.redd.it/cuiu3cpdc0qc1.png",
    "author": "ThEhIsO8730",
    "created_utc": "2024-03-23T04:01:45.000Z",
    "upvotes": 4623
  },
  {
    "id": "1blv4u4",
    "title": "Did it ever happen to you?",
    "url": "https://i.redd.it/dagijy38t3qc1.png",
    "author": "YourLocalMoron75",
    "created_utc": "2024-03-23T15:40:35.000Z",
    "upvotes": 2775
  },
  {
    "id": "1bln2vg",
    "title": "We are not so different, you and I",
    "url": "https://i.redd.it/g1qv88h1l1qc1.png",
    "author": "TheRealPetri",
    "created_utc": "2024-03-23T08:11:14.000Z",
    "upvotes": 2708
  },
  {
    "id": "1blo4gc",
    "title": "Talking Tom hit different ",
    "url": "https://i.redd.it/i4hvdx27y1qc1.jpeg",
    "author": "GamerRipjaw",
    "created_utc": "2024-03-23T09:24:49.000Z",
    "upvotes": 2255
  },
  {
    "id": "1blvr1x",
    "title": "Bet it'll outlast most new cars though",
    "url": "https://i.redd.it/inxdyj6sx3qc1.gif",
    "author": "A_Game_of_Death",
    "created_utc": "2024-03-23T16:06:06.000Z",
    "upvotes": 1844
  },
  {
    "id": "1blexpu",
    "title": "Unbelievable",
    "url": "https://i.redd.it/wd43ux0uazpc1.jpeg",
    "author": "madshallmd",
    "created_utc": "2024-03-23T00:30:41.000Z",
    "upvotes": 1007
  },
  {
    "id": "1bm19rp",
    "title": "Brain must compute",
    "url": "https://i.redd.it/an0kkhzz25qc1.jpeg",
    "author": "Triton-Sol",
    "created_utc": "2024-03-23T19:57:04.000Z",
    "upvotes": 919
  },
  {
    "id": "1blqq4f",
    "title": "Even if it's sad that all the other shows stopped airing years ago i'm happy that they aleast got a nice conclusion+ninjago is still good",
    "url": "https://i.redd.it/nt6oul34s2qc1.jpeg",
    "author": "Flaviphone",
    "created_utc": "2024-03-23T12:12:29.000Z",
    "upvotes": 863
  },
  {
    "id": "1blkjmh",
    "title": "Why is this true just why",
    "url": "https://i.redd.it/tf0x493oq0qc1.jpeg",
    "author": "luthures",
    "created_utc": "2024-03-23T05:20:49.000Z",
    "upvotes": 821
  },
  {
    "id": "1blt5b2",
    "title": "Pshhhkkkkkkrrrr​kakingkakingkakingtsh​chchchchchchchcch",
    "url": "https://i.redd.it/g18x8lhod3qc1.png",
    "author": "ThEhIsO8730",
    "created_utc": "2024-03-23T14:13:28.000Z",
    "upvotes": 796
  },
  {
    "id": "1blxqwp",
    "title": "I swear it was 6 months ago? Where does time go…",
    "url": "https://i.redd.it/n7ueiwruc4qc1.jpeg",
    "author": "Your_Local_Tuba",
    "created_utc": "2024-03-23T17:30:31.000Z",
    "upvotes": 784
  },
  {
    "id": "1blq739",
    "title": "Tax szn am I right",
    "url": "https://i.redd.it/rkjn9spgm2qc1.jpeg",
    "author": "street_dumb_",
    "created_utc": "2024-03-23T11:40:48.000Z",
    "upvotes": 698
  },
  {
    "id": "1blwnyd",
    "title": "The nerves on some people smh",
    "url": "https://i.redd.it/ilcaeqln44qc1.png",
    "author": "MogosTheFirst",
    "created_utc": "2024-03-23T16:44:57.000Z",
    "upvotes": 648
  },
  {
    "id": "1blqw8r",
    "title": "Feeling so guilty…",
    "url": "https://i.redd.it/a9xa6qqvt2qc1.jpeg",
    "author": "Ingeneure_",
    "created_utc": "2024-03-23T12:22:24.000Z",
    "upvotes": 618
  },
  {
    "id": "1blssfd",
    "title": "The final boss!",
    "url": "https://i.redd.it/araf4kyva3qc1.jpeg",
    "author": "osrsslay",
    "created_utc": "2024-03-23T13:57:47.000Z",
    "upvotes": 591
  }
]


export function MeMeComponent(): JSX.Element {
  //const [memes, setMemes] = useState<Meme[]>([]);
  //const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchMemes();
  // }, []);

  // const fetchMemes = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/memes');
  //     const data = await response.json();
  //     setMemes(data.memes);
  //     setLoading(false); // Set loading to false after memes are fetched
  //   } catch (error) {
  //     console.error('Failed to fetch memes:', error);
  //     setLoading(false); // Set loading to false even if fetching fails
  //   }
  // };

  const formatTimeAgo = (timeString: string): string => {
    const timeAgo = new Date(timeString);
    const now = new Date();
    const diffMs = now.getTime() - timeAgo.getTime();

    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return `${minutes} mins${minutes > 1 ? 's' : ''} ago`;
    }
  };


  return (
    <div>
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4">
            {memes.map((meme, index) => (
              <div key={`meme-${index}`} className="mb-10 border-b border-gray-100 border-opacity-50 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm md:text-xl font-bold text-white">
                    {meme.title}
                  </h2>
                  <div className="text-sm text-gray-500 flex items-center">
                    <UpvoteArrow className="mr-2"/>
                    <span>{meme.upvotes}</span>
                    <span className="ml-2">• {formatTimeAgo(meme.created_utc)}</span>
                </div>
                </div>
                <div className="relative overflow-hidden rounded-lg md:h-[30rem] h-full">
                  <img
                    src={meme.url}
                    alt={meme.title}
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-30 object-cover scale-[1.2] blur-lg"
                    style={{ filter: 'blur(8px)' }}
                  />
                  <img
                    src={meme.url}
                    alt={meme.title}
                    className="relative w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
    </div>
  )};