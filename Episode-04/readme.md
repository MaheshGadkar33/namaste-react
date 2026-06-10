# Redux steps-

1)craete store- done
2)Provider to app(connect to the app)-done
3)create slice
4)useSelector
5)useDispatch

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: "carti",
initialState: {
items: [],
},
reducers: {
addItem: (state, action) => {
//mutating state here
state.items.push(action.payload);
},
removeItem: (state) => {
state.items.pop();
},
clearCart: (state) => {
state.items.length = 0;
},
},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
