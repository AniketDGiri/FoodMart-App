import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layout/RootLayout";
import ErrorPage from "../components/Layout/ErrorPage";
import HomePage from "../components/HomePage/HomePage";
import ProductList from "../components/Products/ProductList";
import ProductDetail from "../components/Products/ProductDetails";
import { productDetailsLoader } from "../components/Products/ProductDetails";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import CartInfo from "../components/cart/CartInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductList />,
        children: [],
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: productDetailsLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <CartInfo />,
      },
    ],
  },
]);

export default router;
