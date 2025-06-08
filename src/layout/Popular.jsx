import ProductCart from "../components/ProductCard";

const Popular = () => {
  return (
    <section className="bg-[var(--background-color)] py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-medium text-4xl mb-4">Popular</h1>
          <p className="font-medium text-lg text-[var(--text-muted-color)]">
            Our top selling product that you may like
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 sm:gap-6 md:gap-8 justify-items-center items-center mx-4 md:mx-0">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </div>
    </section>
  );
};

export default Popular;
