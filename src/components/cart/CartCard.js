import { Link } from "react-router-dom";

export const CartCard = ({ product }) => {
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to={`/products/${product.id}`}>
          <img className="w-32 rounded" src={product.poster} alt="" />
          {product.best_seller && (
            <span className="relative bottom-15 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
              Best Seller
            </span>
          )}
        </Link>
        <div className="">
          <Link to={`/products/${product.id}`}>
            <p className="text-lg ml-2 my-2 dark:text-slate-200">
              {product.name}
            </p>
          </Link>
          <button className="text-base ml-2 text-red-400 hover:bg-gray-500 hover:rounded-full">
            <i className="bi bi-eraser-fill"> Remove </i>
          </button>

          <div>
            <i className="bi bi-x xl-2 ml-2 text-xl text-amber-400">
              {product.itemCount}
            </i>
          </div>
        </div>
      </div>

      <div className="text-lg m-2 dark:text-slate-200">
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default CartCard;
