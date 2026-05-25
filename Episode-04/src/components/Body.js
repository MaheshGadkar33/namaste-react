import RestAurentCard from "./RestAurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestauarntList";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./offlinePage";

const Body = () => {
  const styleCard = {
    backgroundColor: "skyBlue",
  };

  // Noraml Variable
  // let restData = [];

  //state Variable
  // const [listOfRest, setListOfRest] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(data[0].card.card.info.name);
  const listOfRest = useRestaurantList();
  // console.log("list of rest", listOfRest);

  useEffect(() => {
    // fetchData();
    setFilteredRestaurent(listOfRest);
  }, [listOfRest]);

  const fetchData = () => {
    let data = fetch("https://corsproxy.io/?https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((json) => {
        // console.log(
        //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
        // );
        // setListOfRest(
        //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants,
        // );
        // setFilteredRestaurent(
        //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants,
        // );

        console.log(json.recipes);
        setListOfRest(json.recipes);
      });
  };

  const handleFilter = () => {
    let filterData = listOfRest.filter((res) => res.rating > 4.8);
    console.log(filterData);
    setFilteredRestaurent(filterData);
  };
  //condional rendering
  // if (listOfRest.length === 0)
  //   return (
  //     <div>
  //       <Shimmer />
  //     </div>
  //   );
  // console.log("Body is rendered");

  const handleSearch = () => {
    // console.log("search is called 🔎");
    let searchData = listOfRest.filter((rest) => {
      return rest.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurent(searchData);
    console.log(searchData);
  };

  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false) return <OfflinePage />;
  return listOfRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer">
      <div className="filter" style={styleCard}>
        <input
          type="text"
          className="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurent?.map((restaurant, id) => (
          <Link key={restaurant.id} to={"/recipes/" + restaurant.id}>
            {" "}
            <RestAurentCard key={restaurant.id} restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
