import  { useState, useEffect } from 'react';
import { TracingBeam } from "./ui/tracing-beam";
import { LoadingSpinner } from './ui/LoadingSpinner';
import UpvoteArrow from '../assets/upVoteArrow';

interface Meme {
  id: string;
  title: string;
  url: string;
  author: string;
  created_utc: string;
  upvotes: number;
}

export function MeMeComponent(): JSX.Element {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    try {
      const response = await fetch('http://localhost:3000/memes');
      const data = await response.json();
      setMemes(data.memes);
      setLoading(false); // Set loading to false after memes are fetched
    } catch (error) {
      console.error('Failed to fetch memes:', error);
      setLoading(false); // Set loading to false even if fetching fails
    }
  };

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
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingSpinner size={50} className="text-white" />
        </div>
      ) : (
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
      )}
    </div>
  )};