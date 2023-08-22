/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "../UI/Card";
import { useCallback, useEffect, useState } from "react";
import apiCalls from "../../services/apiCalls";

export const FeaturedProducts = () => {
  const [featuredProductsData, setFeaturedProductsData] = useState([]);

  //using callback so that function is not called again
  const getProductsData = useCallback(async () => {
    const url = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT_NO}/featured_products`;
    const res = await apiCalls({
      method: "get",
      url: url,
    });

    setFeaturedProductsData(res.data);
  }, []);

  //calling useCallback since this will get called on each route rendering
  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured Food Items
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {featuredProductsData.length &&
          featuredProductsData.map((eachProduct) => (
            <Card key={eachProduct.id} product={eachProduct} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
