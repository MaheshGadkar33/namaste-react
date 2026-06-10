import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    restaurants: [],
  },
  reducers: {
    addFavoritesRestaurants: (state, action) => {
      const existingrestaurant = state.restaurants.find(
        (restaurant) => restaurant.id === action.payload.id,
      );
      if (!existingrestaurant) {
        state.restaurants.push(action.payload);
      }
    },
    removeFavoriteRestaurants: (state, action) => {
      state.restaurants = state.restaurants.filter(
        (restaurant) => restaurant.id !== action.payload,
      );
    },
  },
});

export const { addFavoritesRestaurants, removeFavoriteRestaurants } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
