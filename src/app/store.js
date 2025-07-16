import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localStorage";

const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveToLocalStorage({
    cartReducer: store.getState().cartReducer,
  });
});
