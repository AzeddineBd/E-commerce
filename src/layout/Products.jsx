import ProductCart from "../components/ProductCard";

const Products = () => {
  return (
    <section className="container mx-auto my-12 md:my-16 lg:my-20">
      <div className="text-center my-8">
        <h1 className="font-medium text-4xl mb-4">Products</h1>
        <p className="font-medium text-lg text-[var(--text-muted-color)]">
          Order it for you or for your beloved ones
        </p>
      </div>
      {/* Add product listing components here */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 sm:gap-6 md:gap-8 justify-items-center items-center mx-4 md:mx-0">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        {/* next step I will do Button "load more" */}
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </section>
  );
};

export default Products;
