import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layout/RootLayout";
import ErrorPage from "../components/Layout/ErrorPage";
import HomePage from "../components/HomePage/HomePage";

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
    ],
  },
]);

export default router;
