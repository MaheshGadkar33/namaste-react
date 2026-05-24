import data from "../utils/mockData";
import restData from "../utils/mockData";
import RestAurentCard from "./RestAurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const styleCard = {
    backgroundColor: "skyBlue",
  };

  // Noraml Variable
  // let restData = [];

  //state Variable
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(data[0].card.card.info.name);

  useEffect(() => {
    fetchData();
    // console.log("list of rest", listOfRest);
  }, []);

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
        setFilteredRestaurent(json.recipes);
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
