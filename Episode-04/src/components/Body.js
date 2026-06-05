import RestAurentCard, { withTopRatingLabel } from "./RestAurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestauarntList";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./offlinePage";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const listOfRest = useRestaurantList();

  useEffect(() => {
    setFilteredRestaurent(listOfRest);
  }, [listOfRest]);

  const RestCardPromoted = withTopRatingLabel(RestAurentCard);

  const handleFilter = () => {
    const filterData = listOfRest.filter((res) => res?.info?.avgRating > 4.2);

    setFilteredRestaurent(filterData);
  };

  const handleSearch = () => {
    const searchData = listOfRest.filter((rest) =>
      rest?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredRestaurent(searchData);
  };

  const onLineStatus = useOnlineStatus();

  if (!onLineStatus) return <OfflinePage />;

  if (listOfRest?.length === 0) return <Shimmer />;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search & Filter Section */}
      <div className="bg-white shadow-md py-5 px-6 sticky top-30 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search restaurants..."
            className="w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-lg transition duration-300"
          >
            Search
          </button>

          <button
            onClick={handleFilter}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg transition duration-300"
          >
            ⭐ Top Rated
          </button>

          <input
            type="text"
            placeholder="Update Username"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-8">
          {filteredRestaurent?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
              className="transform transition duration-300 hover:-translate-y-2"
            >
              {restaurant?.info?.avgRating > 4.2 ? (
                <RestCardPromoted restData={restaurant} />
              ) : (
                <RestAurentCard restData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
