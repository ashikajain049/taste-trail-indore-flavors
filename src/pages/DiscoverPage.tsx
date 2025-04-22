
import { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import VendorCard from "../components/VendorCard";

// Mock vendors data
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
  {
    id: "v4",
    name: "Vijay Chaat House",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
    rating: 4.5,
    speciality: "Chaat, Samosa, Kachori",
    distance: "0.8 km",
    location: "Chhappan Dukan, Indore",
    isOpen: true,
  },
  {
    id: "v5",
    name: "Joshi Dahi Bada",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=2008&auto=format&fit=crop",
    rating: 4.7,
    speciality: "Dahi Bada, Aloo Tikki",
    distance: "1.5 km",
    location: "New Palasia, Indore",
    isOpen: false,
  },
];

// Categories for filtering
const categories = [
  "All",
  "Chaat",
  "Sweets",
  "Street Food",
  "Breakfast",
  "Snacks",
  "Beverages",
];

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="pb-20">
      {/* Header with search and toggle */}
      <div className="bg-tastetrail-blue text-white pt-10 pb-6 px-4 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-poppins font-bold text-2xl">Discover</h1>
          <button 
            className={`px-3 py-1 rounded-full flex items-center ${
              showMap ? "bg-white text-tastetrail-blue" : "bg-tastetrail-blue text-white border border-white"
            }`}
            onClick={() => setShowMap(!showMap)}
          >
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{showMap ? "List View" : "Map View"}</span>
          </button>
        </div>
        
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for vendors, locations..."
            className="w-full bg-white text-gray-800 rounded-full py-2 pl-10 pr-4 focus:outline-none font-roboto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          <button className="absolute right-3 top-2 bg-gray-100 p-1 rounded-full">
            <Filter className="text-gray-500 w-4 h-4" />
          </button>
        </div>
        
        {/* Category scrolling */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${
                  activeCategory === category
                    ? "bg-white text-tastetrail-blue font-medium"
                    : "bg-tastetrail-blue bg-opacity-30 text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map or list view */}
      {showMap ? (
        <div className="h-[calc(100vh-210px)] bg-gray-200 flex items-center justify-center">
          <div className="text-center p-4">
            <MapPin className="w-12 h-12 text-tastetrail-orange mx-auto mb-2" />
            <p className="font-poppins font-semibold text-gray-600">
              Map integration will be available in the next version
            </p>
          </div>
        </div>
      ) : (
        <div className="px-4 pt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mockVendors.map((vendor) => (
              <VendorCard key={vendor.id} {...vendor} />
            ))}
          </div>
          
          <div className="text-center my-8 text-gray-500 font-roboto">
            <p>Showing all vendors in Indore</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverPage;
