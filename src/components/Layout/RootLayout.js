import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="RootLayout dark:bg-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
