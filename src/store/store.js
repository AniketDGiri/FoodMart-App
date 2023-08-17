import { cartContext } from "./cartContext/cart-context";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cartStore: cartContext.reducer,
  },
});

export default store;
