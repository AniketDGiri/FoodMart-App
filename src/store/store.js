/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import { cartContext } from "./cartContext/cart-context";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cartStore: cartContext.reducer,
  },
});

export default store;
