import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../../UI/Search";
import useTitle from "../../../hooks/useTitle";
import DropdownLoggedIn from "./DropDownLoggedIn";
import DropdownLoggedOut from "./DropDownLoggedOut";
import { useSelector } from "react-redux";

const Header = () => {
  //for showing dropdonw on userIcon
  const [isDropDown, setIsDropDownn] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  //useState for implementing the search functionality

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  //Getting info about whether user is logged in or not from session storage
  const isToken = sessionStorage.getItem("accessToken");

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

  //useTItle hook for displaying tile on window
  useTitle({ title: "Home" });

  //fetching cartItems data from cart context
  const cartItemsInfo = useSelector((state) => {
    return state.cartStore;
  });

  return (
    <header className="ml-5 mr-5">
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-full px-1 md:px-6 py-3">
          <Link to="/" className="flex items-center">
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
                  {cartItemsInfo.totalCartItems}
                </span>
              </span>
            </Link>
            <span
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
              onClick={() => {
                return setIsDropDownn((prev) => {
                  return !prev;
                });
              }}
            ></span>
            {isDropDown &&
              (isToken ? (
                <DropdownLoggedIn setIsDropDownn={setIsDropDownn} />
              ) : (
                <DropdownLoggedOut setIsDropDownn={setIsDropDownn} />
              ))}
          </div>
        </div>
      </nav>
      {isSearchVisible && <Search setIsSearchVisible={setIsSearchVisible} />}
    </header>
  );
};

export default Header;
