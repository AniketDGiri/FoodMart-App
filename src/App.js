import { RouterProvider } from "react-router-dom";
import router from "./routes/allRoutes";
import { FilterProvider } from "./store/filter-provider";

function App() {
  return (
    <FilterProvider>
      <RouterProvider router={router}></RouterProvider>;
    </FilterProvider>
  );
}

export default App;
