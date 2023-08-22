/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSessionData } from "../../../services/sessionDetails";
import apiCalls from "../../../services/apiCalls";
import { toast } from "react-toastify";

export const DropdownLoggedIn = ({ setIsDropDownn }) => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const onLogInHandler = () => {
    navigate("/");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userId");
    setIsDropDownn(false);
  };

  const { accessToken, userId } = getSessionData();

  useEffect(() => {
    if (accessToken) {
      const getUserDetails = async () => {
        try {
          const url = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT_NO}/600/users/${userId}`;

          const res = await apiCalls({
            method: "get",
            url: url,
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          setUserData(res.data);
        } catch (err) {
          toast.error(`Error Fetching user Data`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      };
      getUserDetails();
    }
  }, [accessToken, userId]);

  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{userData.email || ""}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li
          onClick={() => {
            setIsDropDownn(false);
          }}
        >
          <Link
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1" onClick={onLogInHandler}>
        <span className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Log out
        </span>
      </div>
    </div>
  );
};

export default DropdownLoggedIn;
