import { createContext } from "react";

const initialState = {
  productList: [],
  ratings: null,
  sortBy: null,
  bestSeller: false,
  inStock: false,
};

export const FilterContext = createContext(initialState);
