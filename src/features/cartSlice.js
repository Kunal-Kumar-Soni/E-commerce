import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }
      state.totalQuantity++;
      state.totalPrice += item.price;
    },

    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.totalPrice;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },
    incrementQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
      state.totalQuantity++;
      state.totalPrice += existingItem.price;
    },
    decrementQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem.quantity <= 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== itemId
        );
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },
    removeAll(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAll,
} = cartSlice.actions;
