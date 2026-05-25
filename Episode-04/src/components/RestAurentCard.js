import { CDN_URL } from "../utils/constats";
const RestAurentCard = ({ restData }) => {
  // console.log("🧨", restData);
  // const { name, cuisines, avgRating, sla, cloudinaryImageId } = restData?.info;
  const { name, rating, image, ingredients, mealType } = restData;
  return (
    <div className="restCard">
      <img className="restLogo" src={image} alt="" />
      <h3 className="text-3xl font-bold underline">{name}</h3>
      <h4>⭐️ {rating}</h4>
      <h4>Meal Type : {mealType}</h4>
      <ol>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default RestAurentCard;
