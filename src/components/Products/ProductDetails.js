import axios from "axios";
import { STATUS_CODE } from "../../constants";
import { useLoaderData } from "react-router-dom";
import Rating from "../UI/Rating";

export const ProductDetail = () => {
  //Setting the data using state for providing info to the details page

  // const getProductDetails = useCallback(async () => {}, [productId]);

  // useEffect(() => {
  //   getProductDetails();
  // }, [getProductDetails]);

  const { data } = useLoaderData();

  const productDetail = data;
  console.log(productDetail);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {productDetail.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {productDetail.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={productDetail.poster} alt="" />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{productDetail.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={productDetail.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {productDetail.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {productDetail.in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                5 MB
              </span>
            </p>
            <p className="my-3">
              <button
                className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}
              >
                Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
              </button>
              {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {productDetail.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;

export const productDetailsLoader = async ({ request, params }) => {
  const productId = params.productId;

  const response = await axios({
    method: "get",
    url: `http://localhost:8000/products/${productId}`,
  });

  if (response.status === STATUS_CODE.OK) {
    return response;
  }
  throw new Response(
    { message: "Error Occured while fetching data for given product" },
    { status: 404 }
  );
};
