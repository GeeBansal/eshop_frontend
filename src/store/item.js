import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
    totalAmount: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const new_item = action.payload;
      const existing_item = state.items.find((item) => item.id === new_item.id);

      state.totalAmount = state.totalAmount + new_item.price;
      if (existing_item) {
        existing_item.quantity++;
        existing_item.totalPrice = existing_item.totalPrice + new_item.price;
      } else {
        state.totalItems++;
        state.items.push({
          id: new_item.id,
          quantity: 1,
          price: new_item.price,
          title: new_item.title,
          totalPrice: new_item.price,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existing_item = state.items.find((item) => item.id === id);
      state.totalAmount = state.totalAmount - existing_item.price;
      if (existing_item.quantity === 1) {
        state.totalItems--;
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existing_item.quantity--;
        existing_item.totalPrice =
          existing_item.totalPrice - existing_item.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
