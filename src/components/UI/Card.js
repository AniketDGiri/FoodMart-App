import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { cartStoreActions } from "../../store/cartContext/cart-context";
import { useState } from "react";

export const Card = ({ product }) => {
  //useState for changing the add/remove button icon
  const [isAddButton, setIsAddButton] = useState(true);

  //using useDispatch hook for dispatching an action to add/remove item from the context
  const dispatch = useDispatch();

  //button for add to cart handler
  const addToCartHandler = () => {
    setIsAddButton((prev) => {
      return !prev;
    });
    dispatch(
      cartStoreActions.addItemToCart({ product: { ...product, itemCount: 1 } })
    );
  };

  //Handler for remove item from cart
  const removeFromCartHandler = () => {
    setIsAddButton((prev) => {
      return !prev;
    });

    dispatch(cartStoreActions.removeItemFromCart({ product: product }));
  };

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${product.id}`} className="relative">
        {product.best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-96" src={product.poster} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={product.rating} />
          {/* {}
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{product.price}</span>
          </span>
          <button
            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg ${
              isAddButton
                ? " bg-blue-700 hover:bg-blue-800"
                : " bg-red-700 hover:bg-red-800"
            }`}
            onClick={isAddButton ? addToCartHandler : removeFromCartHandler}
          >
            {isAddButton ? "Add to Cart" : "Remove Item"}
            <i
              className={`ml-1 ${
                isAddButton ? "bi bi-plus-lg" : "bi bi-trash"
              }`}
            ></i>
          </button>

          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
        </p>
      </div>
    </div>
  );
};
