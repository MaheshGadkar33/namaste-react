import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, onCategoryClick }) => {
  const { title, itemCards } = data.card.card;
  const handleAccordion = () => {
    onCategoryClick();
  };

  return (
    <div className="mt-5 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      {/* Accordion Header */}
      <div
        onClick={handleAccordion}
        className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-gray-50 transition-all"
      >
        <h2 className="font-semibold text-lg text-gray-800">
          {title}
          <span className="ml-2 text-gray-500 text-sm">
            ({itemCards.length})
          </span>
        </h2>

        <span className="text-gray-600 text-lg">⌄</span>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <div className="px-5">
          {itemCards.map((item) => (
            <ItemList key={item.card.info.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
