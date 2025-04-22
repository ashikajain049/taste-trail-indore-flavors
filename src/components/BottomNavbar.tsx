
import { Home, MapPin, User, Archive } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: MapPin, path: "/discover", label: "Discover" },
    { icon: Archive, path: "/feed", label: "Feed" },
    { icon: User, path: "/profile", label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full py-1 ${
                isActive ? "text-tastetrail-orange" : "text-gray-600"
              }`}
            >
              <item.icon size={20} className={isActive ? "fill-current" : ""} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
