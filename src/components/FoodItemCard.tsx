
import { Star } from "lucide-react";

interface FoodItemCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  isVeg: boolean;
  isAvailable: boolean;
}

const FoodItemCard = ({
  id,
  name,
  image,
  price,
  description,
  rating,
  isVeg,
  isAvailable,
}: FoodItemCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${!isAvailable ? 'opacity-70' : ''}`}>
      <div className="relative h-36">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2">
          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}>
            <div className="w-3 h-3 rounded-sm bg-white flex items-center justify-center">
              <div className={`w-2 h-2 rounded-sm ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center">
          <Star className="w-3 h-3 text-tastetrail-yellow fill-current" />
          <span className="ml-1 text-xs font-medium">{rating}</span>
        </div>
        
        {!isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-tastetrail-text font-poppins font-semibold px-3 py-1 rounded-full">
              Not Available
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-poppins font-semibold text-tastetrail-text">{name}</h3>
          <span className="font-poppins font-semibold text-tastetrail-orange">₹{price}</span>
        </div>
        <p className="text-gray-500 text-xs mt-1 font-roboto line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default FoodItemCard;
