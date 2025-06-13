// import Component
import Subscription from "../components/Subscription";
import Quantity from "../components/Quantity";
import Button from "../components/Button";
// import data
import productsData from "../data/productsData";
// import hooks
import { useParams } from "react-router-dom";

const Product = () => {
  // To get the product
  const { id } = useParams();
  const product = productsData.find((p) => String(p.id) === id);

  // Check if product is existing
  if (!product) {
    return (
      <div>
        <h1>Product not existing</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-32 mb-8">
      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Title for Mobile */}

        <h1 className="md:hidden font-medium text-2xl text-[var(--text-color)] mb">
          {product.name}
        </h1>

        {/* Image & Shipping */}

        <div className="flex flex-col justify-center text-center w-full max-w-md mx-auto object-contain">
          <img
            src={`../public/assets/products_img/${product.image}`}
            alt="Product"
            className="rounded-lg shadow-lg mb-6"
          />
          <div className="hidden md:block">
            <p className="font-medium text-2xl mb-4">{product.description}</p>
            <p className="text-[var(--primary-color)] text-xl font-bold">
              🚚 FREE SHIPPING
            </p>
          </div>
        </div>

        {/* Details of product */}
        <div>
          <h1 className="hidden md:block font-medium text-2xl text-[var(--text-color)] mb-4">
            {product.name}
          </h1>
          {/* Info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-4">
            {/* Price & Quantity */}
            <div className="md:col-span-2">
              <div className="md:gap-6 flex items-center justify-around md:flex-col md:items-start">
                <p className="font-semibold text-[var(--primary-color)] text-2xl md:text-2xl">
                  {product.price}
                </p>
                <div>
                  <Quantity />
                </div>
              </div>
            </div>

            {/* Subscribe Component */}
            <div className="md:col-span-3 flex flex-col gap-4 md:gap-6 mb-4 md:mb-6">
              <Subscription />
              <div className="mx-auto md:mx-0">
                <Button size="large">+ Add to cart</Button>
              </div>
            </div>
            <div className="max-w-full border-2 border-[var(--border-color)] rounded-lg p-3 md:p-4 col-span-1 md:col-span-4 lg:col-span-5">
              <div className="space-y-2">
                <p className="text-sm md:text-md text-[var(--text-muted-color)]">
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Wax:
                  </span>
                  Top grade Soy wax that delivers a smoke less, consistent burn
                </p>
                <p className="text-sm md:text-md text-[var(--text-muted-color)]">
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Fragrance:
                  </span>
                  Premium quality ingredients with natural essential oils
                </p>
                <p className="text-sm md:text-md text-[var(--text-muted-color)]">
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Burning Time:
                  </span>
                  70-75 hours{" "}
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Dimension:
                  </span>{" "}
                  10cm x 5cm{" "}
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Weight:
                  </span>
                  400g
                </p>
              </div>
            </div>
            <div className="text-center md:hidden">
              <p className="font-medium text-xl mb-4">
                All hand-made with natural soy wax, Candleaf is made for your
                pleasure moments.
              </p>
              <p className="text-[var(--primary-color)] text-xl font-bold">
                🚚 FREE SHIPPING
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
