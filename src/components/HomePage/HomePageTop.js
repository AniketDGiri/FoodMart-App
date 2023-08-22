/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

const HomePageTop = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center mx-5">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The Ultimate Food Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          <span className="italics">
            Tell me what you eat, and I will tell you who you are.
          </span>
          <br />
          FoodMart is the world's most popular and authoritative source for best
          foods. Find ratings and access to the most authentic cusisnes.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore Foods
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};

export default HomePageTop;
