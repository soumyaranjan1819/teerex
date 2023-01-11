import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cartData.push({ ...action.payload, qty: 1 });
    },

    remove(state, action) {
      state.cartData=state.cartData.filter((item) => item.id !== action.payload.id);
    },

    addQuantity(state, action) {
      const itemIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartData[itemIndex].qty += 1;
    },

    subQuantity(state, action) {
      const itemIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartData[itemIndex].qty -= 1;
    },

    getCartTotal(state) {
      let { totalCartQuantity, totalCartPrice } = state.cartData.reduce(
        (acc, curr) => {
          acc.totalCartQuantity += curr.qty;
          acc.totalCartPrice += curr.price * curr.qty;
          return acc;
        },
        {
          totalCartQuantity: 0,
          totalCartPrice: 0,
        }
      );
      state.totalQuantity = totalCartQuantity;
      state.totalPrice = totalCartPrice;
    },

    // getCartTotal: (state) => {
    //   let totalQuantity = state.cartData.reduce(
    //     (cartTotal, cartItem) => {
    //       // const { price, quantity } = cartItem;
    //       // console.log(price, quantity);
    //       // const itemTotal = price * quantity;
    //       // cartTotal.totalPrice += itemTotal;
    //       // cartTotal.totalQuantity += quantity;
    //       cartTotal += cartItem.qty;
    //       return cartTotal;
    //     },0
    //     // {
    //     //   totalPrice: 0,
    //     //   totalQuantity: 0,
    //     // }
    //   );
    //   // state.totalPrice = parseInt(totalPrice.toFixed(2));
    //   state.totalQuantity = totalQuantity;
    // },
  },
});
export const { add, remove, addQuantity, subQuantity, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
