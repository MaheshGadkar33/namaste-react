import data from "../utils/mockData";
import restData from "../utils/mockData";
import RestAurentCard from "./RestAurentCard";
import { useState } from "react";
const Body = () => {
  const styleCard = {
    backgroundColor: "skyBlue",
  };

  // Noraml Variable
  // let restData = [];

  //state Variable
  const [listOfRest, setListOfRest] = useState(restData);
  // console.log(data[0].card.card.info.name);
  const handleFilter = () => {
    let filterData = data.filter(
      (res) => res.card.card.info.avgRatingString > 4,
    );
    console.log(filterData);
    setListOfRest(filterData);
  };
  return (
    <div className="bodyContainer">
      <div className="filter" style={styleCard}>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurantContainer">
        {listOfRest.map((restaurant, id) => (
          <RestAurentCard key={id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
