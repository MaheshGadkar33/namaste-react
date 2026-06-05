import { MENUIMAGE } from "../utils/constats";

const ItemList = (props) => {
  const { name, price, ratings, imageId } = props.data.card.info;

  const { rating, ratingCountV2 } = ratings?.aggregatedRating || {};

  return (
    <div className="flex justify-between py-5 border-b border-gray-100 last:border-none">
      {/* Left */}
      <div className="flex-1 pr-4">
        <h3 className="font-medium text-gray-800 text-base">{name}</h3>

        <p className="font-semibold mt-1 text-gray-700">₹{price / 100}</p>

        {rating && (
          <p className="text-sm text-green-600 mt-1">
            ⭐ {rating} ({ratingCountV2})
          </p>
        )}
      </div>

      {/* Right */}
      {imageId && (
        <div className="relative">
          <img
            className="w-32 h-24 rounded-xl object-cover shadow-sm"
            src={MENUIMAGE + imageId}
            alt={name}
          />

          <button className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] bg-white text-green-600 font-bold px-6 py-1 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50">
            ADD
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
