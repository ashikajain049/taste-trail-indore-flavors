
import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import VendorCard from "../components/VendorCard";
import FoodItemCard from "../components/FoodItemCard";
import ContentPostCard from "../components/ContentPostCard";

// Mock data for vendors, foods and content
const mockVendors = [
  {
    id: "v1",
    name: "Sarafa Bazaar Chaat",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
    rating: 4.8,
    speciality: "Chaat, Pani Puri, Dahi Bada",
    distance: "1.2 km",
    location: "Sarafa Bazaar, Indore",
    isOpen: true,
  },
  {
    id: "v2",
    name: "Johny Hot Dog",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    rating: 4.6,
    speciality: "Hot Dogs, Burgers",
    distance: "2.5 km",
    location: "Sapna Sangeeta, Indore",
    isOpen: true,
  },
  {
    id: "v3",
    name: "56 Dukan Paratha",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2371&auto=format&fit=crop",
    rating: 4.3,
    speciality: "Parathas, Thali",
    distance: "3.8 km",
    location: "56 Dukan, Indore",
    isOpen: false,
  },
];

const mockFoodItems = [
  {
    id: "f1",
    name: "Bhutte Ka Kees",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=2008&auto=format&fit=crop",
    price: "60",
    description: "Grated corn cooked with spices and milk. A popular Indori snack.",
    rating: 4.7,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: "f2",
    name: "Poha Jalebi",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
    price: "40",
    description: "Flattened rice dish with jalebi. Traditional Indori breakfast.",
    rating: 4.9,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: "f3",
    name: "Dahi Vada",
    image: "https://images.unsplash.com/photo-1620813519903-1466124b1680?q=80&w=1854&auto=format&fit=crop",
    price: "50",
    description: "Lentil fritters soaked in yogurt with various chutneys and spices.",
    rating: 4.5,
    isVeg: true,
    isAvailable: false,
  },
];

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
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pb-20">
      {/* Header with search */}
      <div className="bg-tastetrail-orange text-white pt-10 pb-6 px-4 rounded-b-3xl shadow-md">
        <h1 className="font-poppins font-bold text-2xl mb-2">TasteTrail</h1>
        <p className="font-roboto text-sm mb-4 text-white text-opacity-90">
          Discover Indore's Authentic Street Flavors
        </p>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search for vendors, dishes..."
            className="w-full bg-white text-gray-800 rounded-full py-2 pl-10 pr-4 focus:outline-none font-roboto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          <button className="absolute right-3 top-2 bg-gray-100 p-1 rounded-full">
            <Filter className="text-gray-500 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 pt-6">
        {/* Trending Vendors Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-poppins font-bold text-lg text-tastetrail-text">
              Trending Vendors
            </h2>
            <button className="text-tastetrail-orange text-sm font-poppins font-semibold">
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mockVendors.slice(0, 2).map((vendor) => (
              <VendorCard key={vendor.id} {...vendor} />
            ))}
          </div>
        </div>

        {/* Popular Dishes Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-poppins font-bold text-lg text-tastetrail-text">
              Popular Dishes
            </h2>
            <button className="text-tastetrail-orange text-sm font-poppins font-semibold">
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {mockFoodItems.map((item) => (
              <FoodItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        
        {/* Content Feed Preview */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-poppins font-bold text-lg text-tastetrail-text">
              Latest Updates
            </h2>
            <button className="text-tastetrail-orange text-sm font-poppins font-semibold">
              View Feed
            </button>
          </div>
          
          {mockPosts.map((post) => (
            <ContentPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
