import { CDN_URL } from "../utils/constats";

const RestAurentCard = ({ restData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restData?.info;

  return (
    <div className="w-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
      {/* Restaurant Image */}
      <div className="overflow-hidden">
        <img
          className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>

        {/* Cuisine */}
        <p className="text-gray-500 text-sm mt-2 h-10 overflow-hidden">
          {cuisines?.join(", ")}
        </p>

        {/* Rating + Delivery */}
        <div className="flex justify-between items-center mt-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {avgRating}
          </span>

          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
            🚚 {sla?.deliveryTime} min
          </span>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withTopRatingLabel = (RestAurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          🔥 Top Rated
        </span>

        <RestAurentCard {...props} />
      </div>
    );
  };
};

export default RestAurentCard;
