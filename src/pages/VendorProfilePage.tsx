
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Heart, 
  Share2, 
  ChevronLeft, 
  Star, 
  Image, 
  Video 
} from "lucide-react";
import FoodItemCard from "../components/FoodItemCard";
import ContentPostCard from "../components/ContentPostCard";

// Mock vendor data
const mockVendor = {
  id: "v1",
  name: "Sarafa Bazaar Chaat",
  image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
  coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  rating: 4.8,
  totalReviews: 456,
  speciality: "Chaat, Pani Puri, Dahi Bada",
  description: "Authentic Indori chaat experience since 1982. Known for our special pani puri and dahi bada recipes passed down through generations.",
  distance: "1.2 km",
  location: "Near Rajwada, Sarafa Bazaar, Indore",
  isOpen: true,
  openingHours: "6:00 PM - 1:00 AM",
  phone: "+91 9876543210",
};

// Mock food items
const mockFoodItems = [
  {
    id: "f1",
    name: "Special Pani Puri",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
    price: "80",
    description: "Crispy puris filled with spicy and tangy water, potatoes, and sprouts.",
    rating: 4.9,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: "f2",
    name: "Dahi Bada",
    image: "https://images.unsplash.com/photo-1620813519903-1466124b1680?q=80&w=1854&auto=format&fit=crop",
    price: "70",
    description: "Soft lentil dumplings soaked in creamy yogurt topped with sweet and spicy chutneys.",
    rating: 4.7,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: "f3",
    name: "Aloo Tikki Chaat",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2073&auto=format&fit=crop",
    price: "90",
    description: "Potato patties topped with yogurt, chutneys, and crispy sev.",
    rating: 4.6,
    isVeg: true,
    isAvailable: true,
  },
  {
    id: "f4",
    name: "Bhel Puri",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2073&auto=format&fit=crop",
    price: "60",
    description: "Puffed rice mixed with vegetables, chutneys, and sev.",
    rating: 4.5,
    isVeg: true,
    isAvailable: false,
  },
];

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
    vendorId: "v1",
    vendorName: "Sarafa Bazaar Chaat",
    vendorImage: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
    postImage: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
    description: "Preparing fresh chutneys for today's special menu! #FreshIngredients",
    likesCount: 89,
    commentsCount: 12,
    timestamp: "1 day ago",
    isVideo: true,
  },
];

// Gallery mock images
const galleryImages = [
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620813519903-1466124b1680?q=80&w=1854&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=2008&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615887087343-6a32d214587a?q=80&w=1974&auto=format&fit=crop",
];

// Tabs for the profile
const tabs = ["Menu", "Gallery", "Posts", "About"];

const VendorProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Menu");
  const [saved, setSaved] = useState(false);

  // In a real app, we would fetch the vendor data based on the ID
  const vendor = mockVendor;

  return (
    <div className="pb-20">
      {/* Cover image and back button */}
      <div className="relative h-48">
        <img 
          src={vendor.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Link
          to="/discover"
          className="absolute top-10 left-4 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-tastetrail-text" />
        </Link>
        <div className="absolute top-10 right-4 flex space-x-2">
          <button 
            className="bg-white p-2 rounded-full shadow-md"
            onClick={() => setSaved(!saved)}
          >
            <Heart className={`w-5 h-5 ${saved ? "text-red-500 fill-current" : "text-tastetrail-text"}`} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <Share2 className="w-5 h-5 text-tastetrail-text" />
          </button>
        </div>
      </div>

      {/* Vendor info card */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 shadow-md p-4">
        <div className="flex items-start">
          <img 
            src={vendor.image} 
            alt={vendor.name} 
            className="w-20 h-20 rounded-lg object-cover border-4 border-white -mt-10 shadow-md"
          />
          <div className="ml-2 flex-1">
            <div className="flex justify-between items-start">
              <h1 className="font-poppins font-bold text-xl text-tastetrail-text">
                {vendor.name}
              </h1>
              <div className="flex items-center bg-tastetrail-orange bg-opacity-10 px-2 py-1 rounded-full">
                <Star className="w-4 h-4 text-tastetrail-yellow fill-current" />
                <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                <span className="ml-1 text-xs text-gray-500">({vendor.totalReviews})</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{vendor.speciality}</p>
            
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <div className="flex items-center mr-4">
                <MapPin className="w-4 h-4 mr-1 text-tastetrail-orange" />
                <span>{vendor.distance}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-tastetrail-orange" />
                <span>
                  {vendor.isOpen ? (
                    <span className="text-green-600 font-medium">Open Now</span>
                  ) : (
                    <span className="text-red-500 font-medium">Closed</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick action buttons */}
        <div className="flex justify-between mt-4 border-t border-gray-100 pt-4">
          <button className="flex-1 flex flex-col items-center justify-center py-2 text-tastetrail-blue">
            <MapPin className="w-5 h-5 mb-1" />
            <span className="text-xs">Directions</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center py-2 text-tastetrail-blue">
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-xs">Call</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center py-2 text-tastetrail-blue">
            <Clock className="w-5 h-5 mb-1" />
            <span className="text-xs">Hours</span>
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 text-sm font-poppins font-medium relative ${
                activeTab === tab
                  ? "text-tastetrail-orange"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tastetrail-orange"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab content */}
      <div className="p-4">
        {/* Menu tab */}
        {activeTab === "Menu" && (
          <div>
            <h2 className="font-poppins font-bold text-lg text-tastetrail-text mb-4">
              Popular Items
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mockFoodItems.map((item) => (
                <FoodItemCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
        
        {/* Gallery tab */}
        {activeTab === "Gallery" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-poppins font-bold text-lg text-tastetrail-text">
                Photo Gallery
              </h2>
              <div className="flex space-x-2">
                <button className="p-1.5 bg-tastetrail-orange bg-opacity-10 rounded-full">
                  <Image className="w-4 h-4 text-tastetrail-orange" />
                </button>
                <button className="p-1.5 bg-gray-100 rounded-full">
                  <Video className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Posts tab */}
        {activeTab === "Posts" && (
          <div>
            {mockPosts.map((post) => (
              <ContentPostCard key={post.id} {...post} />
            ))}
          </div>
        )}
        
        {/* About tab */}
        {activeTab === "About" && (
          <div>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="font-poppins font-bold text-lg text-tastetrail-text mb-2">
                About
              </h2>
              <p className="text-gray-600 font-roboto">
                {vendor.description}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="font-poppins font-bold text-lg text-tastetrail-text mb-2">
                Location
              </h2>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-tastetrail-orange mt-0.5 mr-2" />
                <p className="text-gray-600 font-roboto">
                  {vendor.location}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="font-poppins font-bold text-lg text-tastetrail-text mb-2">
                Opening Hours
              </h2>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-tastetrail-orange mt-0.5 mr-2" />
                <div>
                  <p className="text-gray-600 font-roboto">
                    {vendor.openingHours}
                  </p>
                  <p className="text-sm mt-1">
                    {vendor.isOpen ? (
                      <span className="text-green-600 font-medium">Open Now</span>
                    ) : (
                      <span className="text-red-500 font-medium">Closed</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-poppins font-bold text-lg text-tastetrail-text mb-2">
                Contact
              </h2>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-tastetrail-orange mt-0.5 mr-2" />
                <p className="text-tastetrail-blue font-roboto underline">
                  {vendor.phone}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProfilePage;
