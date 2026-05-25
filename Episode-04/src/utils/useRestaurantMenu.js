import { useEffect, useState } from "react";
import { MENU_API } from "./constats";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [resId]);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setRestInfo(json);
  };
  return restInfo;
};
export default useRestaurantMenu;
