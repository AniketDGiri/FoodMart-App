import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../UI/Search";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  //useState for implementing the search functionality

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    // console.log(JSON.parse(localStorage.getItem("darkMode")));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  //button onClick functionality implementation
  const searchButtonHandler = () => {
    setIsSearchVisible((prev) => {
      return !prev;
    });
  };

  return (
    <header className="ml-5 mr-5">
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-full px-1 md:px-6 py-3">
          <Link href="/" className="flex items-center">
            <img
              src="https://img.icons8.com/fluency/48/apple-jam.png"
              className="mr-3 h-10"
              alt="CodeBook Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FoodMart
            </span>
          </Link>
          <div className="flex items-center relative mx-10">
            <span
              onClick={() =>
                setIsDarkMode((prev) => {
                  return !prev;
                })
              }
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-moon-fill "
            ></span>
            <span
              onClick={searchButtonHandler}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
          </div>
        </div>
      </nav>
      {isSearchVisible && <Search setIsSearchVisible={setIsSearchVisible} />}
    </header>
  );
};

export default Header;
