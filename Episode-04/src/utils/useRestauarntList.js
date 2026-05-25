import { useEffect, useState } from "react";
import { RECIPE_API } from "./constats";

const useRestaurantList = () => {
  const [listOfRest, setListOfRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RECIPE_API);
    const json = await data.json();
    setListOfRest(json?.recipes);
  };
  return listOfRest;
};

export default useRestaurantList;
