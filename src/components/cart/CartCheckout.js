import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartStoreActions } from "../../store/cartContext/cart-context";
import apiCalls from "../../services/apiCalls";
import { getSessionData } from "../../services/sessionDetails";
import { toast } from "react-toastify";

export const CartCheckout = ({ setIsCartCheckout }) => {
  //using useNavigate Hook to render different page
  const navigate = useNavigate();
  //useState to get change the state on getting userData
  const [userData, setUserData] = useState({});
  //useEffect hook to get the data of the user

  //fetching session info of the logged in User
  const { accessToken, userId } = getSessionData();

  //useDispatch Hook for clearing the cart once order is successfull
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      const getUserDetails = async () => {
        try {
          const url = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT_NO}/600/users/${userId}`;

          const res = await apiCalls({
            method: "get",
            url: url,
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          setUserData(res.data);
        } catch (err) {
          toast.error(`Error Fetching user Data`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      };
      getUserDetails();
    }
  }, [accessToken, userId]);

  //useSelector hook to fetch the cart items
  const cartItemsInfo = useSelector((state) => state.cartStore);

  //handling paynow order
  const onOrderButtonHandler = async (event) => {
    event.preventDefault();
    const orderDetails = {
      cartItems: cartItemsInfo.cartItems,
      totalItems: cartItemsInfo.totalCartItems,
      totalAmount: cartItemsInfo.totalAmount,
      userDetails: {
        name: userData.name,
        email: userData.email,
        id: userData.id,
      },
    };

    const sendOrderDetails = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT_NO}/660/orders`;

        const res = await apiCalls({
          method: "post",
          url: url,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          data: orderDetails,
        });
        console.log(res.data);
        dispatch(cartStoreActions.clearCart());
        navigate("/order-summary", {
          state: { orderData: res.data, status: res.status },
        });
      } catch (err) {
        navigate("/order-summary", {
          state: { status: 400 },
        });
      }
    };
    sendOrderDetails();
  };

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={() => {
                setIsCartCheckout(false);
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
              </h3>
              <form className="space-y-6" onSubmit={onOrderButtonHandler}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value={userData.name || ""}
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value={userData.email || ""}
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="card"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Card Number:
                  </label>
                  <input
                    type="number"
                    name="card"
                    id="card"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="4215625462597845"
                    disabled
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Expiry Date:
                  </label>
                  <input
                    type="number"
                    name="month"
                    id="month"
                    className="inline-block w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="03"
                    disabled
                    required=""
                  />
                  <input
                    type="number"
                    name="year"
                    id="year"
                    className="inline-block w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="27"
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Security Code:
                  </label>
                  <input
                    type="number"
                    name="code"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="523"
                    disabled
                    required=""
                  />
                </div>
                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                  {cartItemsInfo.totalAmount}
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartCheckout;
