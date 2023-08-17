import { filterReducer } from "../../reducers/filterReducers";
import { useReducer, useContext, useCallback } from "react";

import { FilterContext } from "./filter-context";

const filterReducerState = {
  productList: [],
  bestSeller: false,
  inStock: false,
  sortBy: null,
  rating: null,
};

export const FilterProvider = ({ children }) => {
  const [state, dispatchFilterAction] = useReducer(
    filterReducer,
    filterReducerState
  );

  const setInitialState = useCallback((products) => {
    dispatchFilterAction({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }, []);

  const bestSeller = (productList) => {
    return state.bestSeller
      ? productList.filter((item) => {
          return item.best_seller === true;
        })
      : productList;
  };

  const inStock = (productList) => {
    return state.inStock
      ? productList.filter((item) => {
          return item.in_stock === true;
        })
      : productList;
  };

  const sortBy = (productList) => {
    if (state.sortBy === "lowToHigh") {
      return productList.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "highToLow") {
      return productList.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return productList;
  };

  const rating = (productList) => {
    if (state.rating === "4StarsAndAbove") {
      return productList.filter((item) => {
        return Number(item.rating) >= 4;
      });
    }

    if (state.rating === "3StarsAndAbove") {
      return productList.filter((item) => {
        return Number(item.rating) >= 3;
      });
    }
    if (state.rating === "2StarsAndAbove") {
      return productList.filter((item) => {
        return Number(item.rating) >= 2;
      });
    }
    if (state.rating === "1StarsAndAbove") {
      return productList.filter((item) => {
        return Number(item.rating) >= 1;
      });
    }
    return productList;
  };

  const updatedProductList = rating(
    sortBy(inStock(bestSeller(state.productList)))
  );

  const filterState = {
    productList: updatedProductList,
    state,
    dispatchFilterAction,
    setInitialState: setInitialState,
  };

  return (
    <FilterContext.Provider value={filterState}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);

  return context;
};
