import { Card } from "../UI/Card";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const FeaturedProducts = () => {
  const [featuredProductsData, setFeaturedProductsData] = useState([]);

  //using callback so that function is not called again
  const getProductsData = useCallback(async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/featured_products",
    });
    console.log(res.data);
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
