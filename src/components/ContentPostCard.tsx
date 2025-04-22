
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ContentPostCardProps {
  id: string;
  vendorId: string;
  vendorName: string;
  vendorImage: string;
  postImage: string;
  description: string;
  likesCount: number;
  commentsCount: number;
  timestamp: string;
  isVideo?: boolean;
}

const ContentPostCard = ({
  id,
  vendorId,
  vendorName,
  vendorImage,
  postImage,
  description,
  likesCount,
  commentsCount,
  timestamp,
  isVideo = false,
}: ContentPostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [localLikesCount, setLocalLikesCount] = useState(likesCount);

  const handleLike = () => {
    if (liked) {
      setLocalLikesCount(prev => prev - 1);
    } else {
      setLocalLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-3 flex items-center">
        <Link to={`/vendor/${vendorId}`}>
          <img 
            src={vendorImage} 
            alt={vendorName} 
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>
        <div className="ml-3">
          <Link to={`/vendor/${vendorId}`} className="font-poppins font-semibold text-tastetrail-text">
            {vendorName}
          </Link>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>
      
      <div className="relative">
        {isVideo ? (
          <div className="relative">
            <video 
              src={postImage} 
              className="w-full h-80 object-cover" 
              controls 
              poster={postImage} 
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
              Video
            </div>
          </div>
        ) : (
          <img 
            src={postImage} 
            alt="Post" 
            className="w-full h-80 object-cover" 
          />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <div className="flex space-x-4">
            <button 
              className="flex items-center" 
              onClick={handleLike}
            >
              <Heart 
                className={`w-6 h-6 ${liked ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
              />
              <span className="ml-1 text-sm">{localLikesCount}</span>
            </button>
            <button className="flex items-center">
              <MessageCircle className="w-6 h-6 text-gray-600" />
              <span className="ml-1 text-sm">{commentsCount}</span>
            </button>
          </div>
          <button>
            <Share2 className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <p className="text-sm font-roboto">
          <Link to={`/vendor/${vendorId}`} className="font-semibold text-tastetrail-text">
            {vendorName}
          </Link>{" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContentPostCard;
