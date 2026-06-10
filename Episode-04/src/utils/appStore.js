//create store 1st
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";
import toggleThemeReducer from "./themeSlice";

const appStore = configureStore({
  //comes various slices
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    toggleTheme: toggleThemeReducer,
  },
});

export default appStore;
