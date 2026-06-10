import { useSelector } from "react-redux";
import RestAurentCard from "./RestAurentCard";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const favoritesRestaurants = useSelector(
    (store) => store.favorites.restaurants,
  );

  if (favoritesRestaurants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-8xl mb-4">❤️</div>
        <h1 className="text-3xl font-bold text-gray-800">No Favorites Yet</h1>
        <p className="text-gray-500 mt-2">
          Start adding your favorite restaurants
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800">
            ❤️ Favorite Restaurants
          </h1>
          <p className="text-gray-500 mt-2">
            {favoritesRestaurants.length} restaurant
            {favoritesRestaurants.length > 1 ? "s" : ""} saved
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-8">
          {favoritesRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurants/${restaurant.id}`}
              className="transform transition duration-300 hover:-translate-y-2"
            >
              <RestAurentCard
                restData={{ info: restaurant }}
                showRemoveButton={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
