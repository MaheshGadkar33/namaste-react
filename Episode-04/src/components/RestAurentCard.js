import { CDN_URL } from "../utils/constats";
const RestAurentCard = ({ restData }) => {
  // console.log(restData.card.card.info.name);
  const { name, cuisines, avgRating, sla } = restData?.card.card.info;
  return (
    <div className="restCard">
      <img
        className="restLogo"
        src={`${CDN_URL}${restData.card.card.info.cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>deliveryTime : {sla.deliveryTime}</h4>
    </div>
  );
};

export default RestAurentCard;
