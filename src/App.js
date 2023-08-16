import { RouterProvider } from "react-router-dom";
import router from "./routes/allRoutes";
import { FilterProvider } from "./store/filter-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <FilterProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>;
    </FilterProvider>
  );
}

export default App;
