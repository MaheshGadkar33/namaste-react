import { CDN_URL } from "../utils/constats";
const RestAurentCard = ({ restData }) => {
  console.log("🧨", restData);
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restData?.info;
  // const { itemName, itemPrice, restaurantName } = restData;
  return (
    <div className="restCard">
      <img className="restLogo" src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestAurentCard;
