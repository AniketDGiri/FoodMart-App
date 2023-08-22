import React from "react";
import HomePageTop from "./HomePageTop";
import FeaturedProducts from "../Products/FeaturedProducts";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import useTitle from "../../hooks/useTitle";

const HomePage = () => {
  useTitle({ title: "Home" });
  return (
    <main>
      <HomePageTop />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default HomePage;
