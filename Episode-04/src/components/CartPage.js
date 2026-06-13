import { clearCart, removeItem } from "../utils/cartSlice";
import { MENUIMAGE } from "../utils/constats";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cartItems.map((item) => (
        <div
          data-testid="cartItem"
          key={item.id}
          className="flex justify-between py-5 border-b border-gray-100"
        >
          <div className="flex-1 pr-4">
            <h3 className="font-medium text-gray-800 text-base">{item.name}</h3>

            <p className="font-semibold mt-1 text-gray-700">
              ₹{item.price / 100}
            </p>
          </div>

          {item.imageId && (
            <div className="relative">
              <img
                className="w-32 h-24 rounded-xl object-cover shadow-sm"
                src={MENUIMAGE + item.imageId}
                alt={item.name}
              />

              <button
                className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] bg-white text-red-600 font-bold px-6 py-1 rounded-lg shadow-md border border-gray-200"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && (
        <h1>Cart is Empty add some item to the cart! </h1>
      )}
    </div>
  );
};

export default CartPage;
