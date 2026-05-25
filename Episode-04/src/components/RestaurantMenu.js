import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import LoadingPage from "./LoadingPage";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("resId", resId);
  const restInfo = useRestaurantMenu(resId);

  // console.log("restInfo", restInfo);
  if (!restInfo) return <LoadingPage />;
  const { name, rating, cuisine, instructions } = restInfo;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{rating}</h2>
      <h3>{cuisine}</h3>
      <ol>
        {instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
