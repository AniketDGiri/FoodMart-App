/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
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
import ProtectedRoutes from "../components/Authentication/ProtectedRoutes";
import OrderPage from "../components/order/OrderPage";
import DashboardPage, {
  DashboardPageLoader,
} from "../components/Dashboard/DashboardPage";
import PageNotFound from "../components/UI/PageNotFound";

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
        element: (
          <ProtectedRoutes>
            <CartInfo />
          </ProtectedRoutes>
        ),
      },
      {
        path: "order-summary",
        element: <OrderPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: DashboardPageLoader,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
