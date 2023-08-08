import { Card } from "../UI/Card";

export const FeaturedProducts = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured Food Items
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default FeaturedProducts;
