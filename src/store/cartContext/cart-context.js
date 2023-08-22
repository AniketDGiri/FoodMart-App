import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  cartItems: [],
  totalCartItems: 0,
  totalAmount: 0,
};

const isItemInCart = (state, id) => {
  return state.cartItems.findIndex((item) => {
    return item.id === id;
  });
};

export const cartContext = createSlice({
  name: "cart-context",
  initialState: initalCartState,
  reducers: {
    addItemToCart(state, action) {
      const { product } = action.payload;
      state.totalCartItems += 1;

      state.totalAmount += product.price;

      const itemIndex = isItemInCart(state, product.id);
      if (itemIndex === -1) {
        state.cartItems.push(product);
      } else {
        state.cartItems[itemIndex].itemCount += 1;
      }
      //   console.log(current(state));
    },
    removeItemFromCart(state, action) {
      const { product } = action.payload;
      const itemIndex = isItemInCart(state, product.id);

      if (state.cartItems[itemIndex].itemCount === 1) {
        state.cartItems = state.cartItems.filter((item) => {
          return item.id !== product.id;
        });
      } else {
        state.cartItems[itemIndex].itemCount -= 1;
      }
      state.totalAmount -= product.price;
      state.totalCartItems -= 1;
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalCartItems = 0;
    },
  },
});

export const cartStoreActions = cartContext.actions;
