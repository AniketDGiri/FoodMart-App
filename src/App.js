import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/allRoutes";
import { FilterProvider } from "./store/filterContext/filter-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <FilterProvider>
        <ToastContainer />
        <RouterProvider router={router}></RouterProvider>;
      </FilterProvider>
    </Provider>
  );
}

export default App;
