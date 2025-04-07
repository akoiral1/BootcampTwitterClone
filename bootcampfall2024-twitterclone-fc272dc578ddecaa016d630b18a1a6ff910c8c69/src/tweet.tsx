// Tweet.js
import { useState } from 'react';

type TweetProps = {
  username: string;
  content: string;
  date: string;
  initialLikes: number;
};

const Tweet = ({ username, content, date, initialLikes }: TweetProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="tweet">
      <h2>@{username}</h2>
      <p>{content}</p>
      <p>{date}</p>
      <button onClick={handleLike}>
        {liked ? "❤️" : "🤍"} {likeCount}
      </button>
    </div>
  );
};

export default Tweet;

