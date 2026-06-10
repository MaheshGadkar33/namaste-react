import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("isDarkMode");
console.log("saved Theme", typeof savedTheme);

const someItem = localStorage.getItem("item");
console.log(someItem);

const initialTheme = savedTheme === "true";

const themeSlice = createSlice({
  name: "themeToggle",
  initialState: {
    isDarkMode: initialTheme,
  },
  reducers: {
    toggleTheme: (state, action) => {
      console.log("in slice");
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
