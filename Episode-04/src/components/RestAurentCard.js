import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constats";
import {
  addFavoritesRestaurants,
  removeFavoriteRestaurants,
} from "../utils/favoritesSlice";
import { useState } from "react";
const RestAurentCard = ({ restData, showRemoveButton = false }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restData?.info;

  // console.log("🧨🧨restData", restData);

  const dispatch = useDispatch();
  const favoritesRestaurants = useSelector(
    (store) => store.favorites.restaurants,
  );

  const isFavorite = favoritesRestaurants.some(
    (restaurant) => restaurant.id === restData?.info?.id,
  );

  // console.log(name, isFavorite);

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      //remove from store
      dispatch(removeFavoriteRestaurants(restData?.info?.id));
    } else {
      //add to store
      dispatch(addFavoritesRestaurants(restData?.info));
    }
  };

  const handleremovefavorites = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFavoriteRestaurants(restData?.info?.id));
  };

  return (
    <div className="w-[300px] relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
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

        {showRemoveButton ? (
          <button
            onClick={handleremovefavorites}
            className="absolute top-1 right-3 z-10 bg-red-50 text-red-600 px-3 py-1 rounded-md shadow-lg"
          >
            🗑️ Remove
          </button>
        ) : (
          <button
            onClick={handleFavoriteToggle}
            className="absolute top-1 right-3 z-10 bg-pink-50  px-3 py-1 shadow-lg rounded-md"
          >
            {isFavorite ? "❤️" : "♡"}
          </button>
        )}

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
