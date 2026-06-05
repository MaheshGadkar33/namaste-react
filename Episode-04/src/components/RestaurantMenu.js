import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import LoadingPage from "./LoadingPage";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  // console.log("resId", resId);
  const restInfo = useRestaurantMenu(resId);
  // console.table("restInfo", restInfo);

  // console.log("restInfo", restInfo);
  if (!restInfo) return <LoadingPage />;
  const {
    name,
    city,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    locality,
    aggregatedDiscountInfo,
  } = restInfo[2].card.card.info;

  // const { itemCards } = restInfo[5].groupedCard.cardGroupMap.REGULAR.cards;
  // console.log(restInfo[5].groupedCard.cardGroupMap.REGULAR.cards);

  // console.log("👉 restInfo", restInfo[2].card.card.info);
  const freeDelivery = aggregatedDiscountInfo?.header;

  const itemCategories =
    restInfo[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  // console.log("👉", itemCategories);
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Restaurant Card */}
      <div className="bg-white rounded-4xl shadow-gray-300 shadow-md border border-gray-300 p-5 md:p-6  ">
        {/* Name */}
        <h1 className="text-xl md:text-2xl font-bold mb-2">{name}</h1>

        {/* Rating + Cost */}
        <div className="flex flex-wrap items-center gap-2 text-sm lg:text-xl md:text-base text-gray-700">
          <span className="font-semibold text-green-600">⭐ {avgRating}</span>
          <span>•</span>
          <span>{costForTwoMessage}</span>
        </div>

        {/* Cuisines */}
        <p className="text-orange-600 mt-2 lg:text-xl text-sm md:text-base font-medium">
          {cuisines?.join(", ")}
        </p>

        {/* Outlet + Time */}
        <div className="mt-3 text-gray-600 text-sm ">
          <p>Outlet: {locality}</p>
          <p>{sla?.slaString}</p>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t pt-3 text-sm text-orange-500 font-medium">
          <p className="text-orange-500 text-[13px] mt-2">
            {freeDelivery || "ONE Free delivery on orders above ₹199"}
          </p>
        </div>
      </div>

      {/* MENU Heading */}
      <div className="flex items-center justify-center  mt-6 md:mt-10 mb-3">
        <div className="border-t w-10"></div>
        <span className="mx-3 text-gray-500 tracking-widest text-sm">MENU</span>
        <div className="border-t w-10"></div>
      </div>

      {/* Search Bar */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search for dishes"
          className="w-full px-4 py-3 rounded-xl shadow-gray-300 shadow-md bg-gray-100  focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Item categories */}
      {itemCategories.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category}
          showItems={index === showIndex ? true : false}
          onCategoryClick={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
