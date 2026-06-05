import { useEffect, useState } from "react";
import { MENU_API } from "./constats";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [resId]);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    // const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(
    //   json.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards,
    // );
    // console.log(json.data);
    setRestInfo(json?.data?.cards);
  };
  return restInfo;
};
export default useRestaurantMenu;
