import { useCallback, useEffect, useState } from "react";
import { Card } from "../UI/Card";
import FilterBar from "../Filter/FilterBar";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useFilter } from "../../store/filter-provider";

const ProductList = () => {
  const [isFilterVisible, setIsVisibleFilter] = useState(false);

  //using useFilter custom created

  const { productList, setInitialState } = useFilter();
  //this hook is used for setting all the data obtained from the axios call
  // const [productDetails, setProductDetails] = useState([]);

  const onDropDownButtonHandler = () => {
    setIsVisibleFilter((prev) => {
      return !prev;
    });
  };

  //craeted custom hook to set the title
  useTitle({ title: "Product List" });

  //We need to fetch search param from the URL
  //This is available with the reactRouter version 6
  const [searchParam] = useSearchParams();

  const filterValue = searchParam.get("q");
  //This is for fetching data fron the server, and since we are calling this function in useEffect, using it with useCallback to store the function, to avoid
  //infinite loop, during component re-rendering

  const getProductDetails = useCallback(async () => {
    const res = await axios({
      method: "get",
      url: `http://localhost:8000/products?name_like=${
        filterValue ? filterValue : ""
      }`,
    });
    // setProductDetails(res.data);
    setInitialState(res.data);
  }, [filterValue, setInitialState]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  return (
    <main className="mx-10">
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Foods ({productList.length})
          </span>
          <span>
            {isFilterVisible && (
              <FilterBar setIsVisibleFilter={setIsVisibleFilter} />
            )}
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
              onClick={onDropDownButtonHandler}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productList.map((eachProduct) => (
            <Card key={eachProduct.id} product={eachProduct} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductList;
