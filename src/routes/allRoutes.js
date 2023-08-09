import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layout/RootLayout";
import ErrorPage from "../components/Layout/ErrorPage";
import HomePage from "../components/HomePage/HomePage";
import ProductList from "../components/Products/ProductList";

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
      },
    ],
  },
]);

export default router;
