
import { useState } from "react";
import ContentPostCard from "../components/ContentPostCard";

// Mock posts data
const mockPosts = [
  {
    id: "p1",
    vendorId: "v1",
    vendorName: "Sarafa Bazaar Chaat",
    vendorImage: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
    postImage: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
    description: "Come try our special Indori chaat tonight! Open till 1 AM. #SarafaBazaar #IndoriChaat",
    likesCount: 156,
    commentsCount: 23,
    timestamp: "2 hours ago",
  },
  {
    id: "p2",
    vendorId: "v2",
    vendorName: "Johny Hot Dog",
    vendorImage: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    postImage: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    description: "Our signature hot dogs are made with the finest ingredients and secret spices. A must-try when in Indore!",
    likesCount: 234,
    commentsCount: 45,
    timestamp: "5 hours ago",
    isVideo: true,
  },
  {
    id: "p3",
    vendorId: "v4",
    vendorName: "Vijay Chaat House",
    vendorImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
    postImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
    description: "Fresh batch of kachoris ready! Come and grab them while they're hot. Limited stock available today.",
    likesCount: 89,
    commentsCount: 12,
    timestamp: "8 hours ago",
  },
];

// Feed filter options
const filterOptions = ["For You", "Trending", "New", "Following"];

const FeedPage = () => {
  const [activeFilter, setActiveFilter] = useState("For You");

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 pt-10 shadow-sm">
        <h1 className="font-poppins font-bold text-2xl px-4 mb-4">Community Feed</h1>
        
        {/* Filter tabs */}
        <div className="border-b">
          <div className="flex px-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                className={`px-4 py-3 text-sm font-poppins font-medium relative ${
                  activeFilter === option
                    ? "text-tastetrail-orange"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveFilter(option)}
              >
                {option}
                {activeFilter === option && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tastetrail-orange"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feed content */}
      <div className="px-4 pt-4">
        {mockPosts.map((post) => (
          <ContentPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
