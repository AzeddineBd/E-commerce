// ✅ Import components
import Subscription from "../components/Subscription";
import Quantity from "../components/Quantity";
import Button from "../components/Button";

// ✅ Import data and functions
import productsData from "../data/productsData";
import { useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useState, useEffect } from "react";

const Product = () => {
  // ✅ 1. Hooks
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);

  // ✅ 2.Product identification
  const product = productsData.find((p) => String(p.id) === id);

  // ✅ 4. Add product to cart function
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // ✅ 5. Check if the product is available
  if (!product) {
    return (
      <div>
        <h1>Product not existing</h1>
      </div>
    );
  }

  // ✅ 6. UI
  return (
    <div className="container mx-auto px-4 pt-32 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* العنوان على الموبايل */}
        <h1 className="md:hidden font-medium text-2xl text-[var(--text-color)] mb">
          {product.name}
        </h1>

        {/* Address on mobile */}
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

        {/* the details */}
        <div>
          <h1 className="hidden md:block font-medium text-2xl text-[var(--text-color)] mb-4">
            {product.name}
          </h1>

          {/* Price and quantity */}
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="md:gap-6 flex items-center justify-around md:flex-col md:items-start">
                <p className="font-semibold text-[var(--primary-color)] text-2xl md:text-2xl">
                  {product.price}
                </p>
                <Quantity value={quantity} onChange={setQuantity} />
              </div>
            </div>

            {/* Subscribe and click the cart button*/}
            <div className="md:col-span-3 flex flex-col gap-4 md:gap-6 mb-4 md:mb-6">
              <Subscription />
              <div onClick={handleAddToCart} className="mx-auto md:mx-0">
                <Button size="large">+ Add to cart</Button>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="max-w-full border-2 border-[var(--border-color)] rounded-lg p-3 md:p-4 col-span-1 md:col-span-4 lg:col-span-5">
              <div className="space-y-2">
                <p className="text-sm md:text-md text-[var(--text-muted-color)]">
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Wax:
                  </span>
                  Top grade Soy wax that delivers a smokeless, consistent burn
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
                  70–75 hours{" "}
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Dimension:
                  </span>
                  10cm x 5cm{" "}
                  <span className="font-semibold text-[var(--text-color)] mr-1">
                    Weight:
                  </span>
                  400g
                </p>
              </div>
            </div>

            {/* Mobile Notes */}
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
