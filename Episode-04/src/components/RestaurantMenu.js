import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const fetchData = await fetch("https://dummyjson.com/recipes/" + resId);
    const json = await fetchData.json();
    console.log(json.name);
    setRestInfo(json);
  };
  console.log("restInfo", restInfo);
  if (!restInfo) return <Shimmer />;
  const { name, rating, cuisine, instructions } = restInfo;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{rating}</h2>
      <h3>{cuisine}</h3>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
