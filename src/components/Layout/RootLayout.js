import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import useTitle from "../../hooks/useTitle";

const RootLayout = () => {
  useTitle({ title: "Home" });
  return (
    <div className="RootLayout dark:bg-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
