import ProductCart from "../components/ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-8">
        <h1 className="font-medium text-4xl mb-4">Products</h1>
        <p className="font-medium text-lg text-[var(--text-muted-color)]">
          Order it for you or for your beloved ones
        </p>
      </div>
      {/* Add product listing components here */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-items-center">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default Products;
