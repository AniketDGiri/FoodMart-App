import HomePageTop from "./HomePageTop";
import FeaturedProducts from "../Products/FeaturedProducts";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

const HomePage = () => {
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
