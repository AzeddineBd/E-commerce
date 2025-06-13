import ProductCart from "../components/ProductCard";
import productsData from "../data/productsData";

const Products = () => {
  return (
    <section
      id="products"
      className="container mx-auto my-12 md:my-16 lg:my-20"
    >
      <div className="text-center my-8">
        <h1 className="font-medium text-4xl mb-4">Products</h1>
        <p className="font-medium text-lg text-[var(--text-muted-color)]">
          Order it for you or for your beloved ones
        </p>
      </div>
      {/* Add product listing components here */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 sm:gap-6 md:gap-8 justify-items-center items-center mx-4 md:mx-0">
        {productsData.map((product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
