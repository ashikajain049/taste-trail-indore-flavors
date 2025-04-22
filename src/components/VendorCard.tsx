
import { MapPin, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface VendorCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  speciality: string;
  distance: string;
  location: string;
  isOpen: boolean;
}

const VendorCard = ({ 
  id, 
  name, 
  image, 
  rating, 
  speciality, 
  distance, 
  location, 
  isOpen 
}: VendorCardProps) => {
  return (
    <Link to={`/vendor/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="relative h-48">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-poppins font-semibold">
            {distance}
          </div>
          {isOpen ? (
            <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
              Open Now
            </div>
          ) : (
            <div className="absolute bottom-2 left-2 bg-gray-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
              Closed
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-poppins font-bold text-lg text-tastetrail-text">{name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-tastetrail-yellow fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-1 font-roboto">{speciality}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
