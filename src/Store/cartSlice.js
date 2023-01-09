import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push({ ...action.payload, qty: 1 });
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    addQuantity(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[itemIndex].qty += 1;
    },
    subQuantity(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[itemIndex].qty -= 1;
      // console.log(itemIndex);
    },
  },
});
export const { add, remove, addQuantity, subQuantity } = cartSlice.actions;
export default cartSlice.reducer;
