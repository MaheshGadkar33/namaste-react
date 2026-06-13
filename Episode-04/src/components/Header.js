import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constats";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onLineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const isDarkMode = useSelector((store) => store.toggleTheme.isDarkMode);
  // console.log(isDarkMode);

  const dispatch = useDispatch();

  const favoritesRestaurants = useSelector(
    (store) => store.favorites.restaurants,
  );

  const handleToggleTheme = () => {
    // console.log("clicked");
    dispatch(toggleTheme());
  };

  // console.log("favoritesRestaurants", favoritesRestaurants);

  return (
    <header
      className={`sticky top-0 z-50 shadow-lg ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div>
          <img
            className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-lg font-medium text-gray-700">
            <li className="flex items-center gap-2">
              Status:
              <span className="text-xl">{onLineStatus ? "🟢" : "🔴"}</span>
            </li>

            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/grocery"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Grocery
              </Link>
            </li>

            <li>
              <Link to="/cart" className="cursor-pointer hover:text-orange-500">
                🛒 Cart({cartItems.length} Item)
              </Link>
            </li>

            <li>
              <Link
                to="/favorites"
                className="cursor-pointer hover:text-orange-500"
              >
                ❤️ Favorites({favoritesRestaurants.length})
              </Link>
            </li>

            <li className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
              👤 {loggedInUser}
            </li>

            <li>
              <button
                className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
              >
                {btnName}
              </button>
            </li>

            <li>
              <button onClick={handleToggleTheme}>
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
