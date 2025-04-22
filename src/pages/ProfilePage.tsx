
import { User, Settings, Heart, Clock, MapPin } from "lucide-react";

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "Guest User",
    email: "guest@example.com",
    location: "Indore, MP",
    joinDate: "April 2023",
  };

  // Mock saved vendors
  const savedVendors = [
    {
      id: "v1",
      name: "Sarafa Bazaar Chaat",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2788&auto=format&fit=crop",
      location: "Sarafa Bazaar, Indore",
    },
    {
      id: "v2",
      name: "Johny Hot Dog",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
      location: "Sapna Sangeeta, Indore",
    },
  ];

  // Mock recent activity
  const recentActivity = [
    {
      id: "a1",
      type: "visit",
      vendorName: "Sarafa Bazaar Chaat",
      timestamp: "Yesterday",
    },
    {
      id: "a2",
      type: "like",
      vendorName: "Johny Hot Dog",
      timestamp: "3 days ago",
    },
    {
      id: "a3",
      type: "save",
      vendorName: "56 Dukan Paratha",
      timestamp: "1 week ago",
    },
  ];

  return (
    <div className="pb-20">
      {/* Profile header */}
      <div className="bg-tastetrail-orange text-white pt-10 pb-6 px-4 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-start">
          <h1 className="font-poppins font-bold text-2xl">Profile</h1>
          <button className="p-2 bg-white bg-opacity-20 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <User className="w-10 h-10 text-tastetrail-orange" />
          </div>
          <div className="ml-4">
            <h2 className="font-poppins font-semibold text-xl">{user.name}</h2>
            <p className="text-sm text-white text-opacity-90">{user.email}</p>
            <div className="flex items-center mt-1 text-sm text-white text-opacity-80">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{user.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 pt-6">
        {/* Saved Vendors Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Heart className="w-5 h-5 text-tastetrail-orange mr-2" />
            <h2 className="font-poppins font-bold text-lg text-tastetrail-text">
              Saved Vendors
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {savedVendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex items-center">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-20 h-20 object-cover"
                />
                <div className="p-3 flex-1">
                  <h3 className="font-poppins font-semibold text-tastetrail-text">{vendor.name}</h3>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{vendor.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Clock className="w-5 h-5 text-tastetrail-blue mr-2" />
            <h2 className="font-poppins font-bold text-lg text-tastetrail-text">
              Recent Activity
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {recentActivity.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`p-4 flex items-center ${
                  index !== recentActivity.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {activity.type === "visit" && (
                  <MapPin className="w-5 h-5 text-tastetrail-blue" />
                )}
                {activity.type === "like" && (
                  <Heart className="w-5 h-5 text-red-500" />
                )}
                {activity.type === "save" && (
                  <Heart className="w-5 h-5 text-tastetrail-orange" />
                )}
                <div className="ml-3">
                  <p className="text-sm font-roboto">
                    <span className="font-medium">
                      {activity.type === "visit" && "Visited "}
                      {activity.type === "like" && "Liked "}
                      {activity.type === "save" && "Saved "}
                    </span>
                    {activity.vendorName}
                  </p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Actions Section */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <button className="bg-white w-full py-3 rounded-lg shadow-sm text-tastetrail-text font-poppins font-medium flex items-center justify-center">
            <Settings className="w-5 h-5 mr-2 text-tastetrail-blue" />
            Preferences
          </button>
          <button className="bg-white w-full py-3 rounded-lg shadow-sm text-tastetrail-text font-poppins font-medium flex items-center justify-center">
            <User className="w-5 h-5 mr-2 text-tastetrail-blue" />
            Switch to Vendor Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
