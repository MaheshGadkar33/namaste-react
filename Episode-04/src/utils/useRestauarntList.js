import { useEffect, useState } from "react";
import { RESTAURANTS } from "./constats";

const useRestaurantList = () => {
  const [listOfRest, setListOfRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS);
    const json = await data.json();
    // console.log(json.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRest(
      json.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
  };
  return listOfRest;
};

export default useRestaurantList;
