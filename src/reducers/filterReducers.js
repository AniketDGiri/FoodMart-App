export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        productList: payload.products,
      };

    case "BEST_SELLER_ONLY": {
      if (payload.bestSeller === true) {
        return {
          ...state,
          bestSeller: true,
        };
      }
      return {
        ...state,
        bestSeller: false,
      };
    }
    case "IN_STOCK_ONLY": {
      if (payload.inStock === true) {
        return {
          ...state,
          inStock: true,
        };
      }
      return {
        ...state,
        inStock: false,
      };
    }

    case "SORT_BY": {
      if (payload.sortBy === "lowToHigh") {
        return {
          ...state,
          sortBy: "lowToHigh",
        };
      }

      if (payload.sortBy === "highToLow") {
        return {
          ...state,
          sortBy: "highToLow",
        };
      }
      break;
    }

    case "RATING": {
      return {
        ...state,
        rating: payload.rating,
      };
    }

    case "CLEAR_FILTER": {
      return {
        ...state,
        rating: null,
        sortBy: null,
        bestSeller: false,
        inStock: false,
      };
    }

    default:
      return {
        productList: [],
      };
  }
};
