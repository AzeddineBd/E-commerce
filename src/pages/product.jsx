// import Component
import NavBar from "../components/NavBar";
import Subscription from "../components/Subscription";
import Quantity from "../components/Quantity";
import Footer from "../components/Footer";
// Image
import productImg from "../assets/product.jpg";

const Product = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 pt-32">
        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image & Shipping */}

          <div className="flex flex-col justify-center text-center">
            <img
              src={productImg}
              alt="Product"
              className="rounded-lg shadow-lg mb-6"
            />
            <p className="font-medium text-2xl mb-4">
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.
            </p>
            <p className="text-[var(--primary-color)] text-xl font-bold">
              🚚 FREE SHIPPING
            </p>
          </div>

          {/* Details of product */}
          <div>
            <h1 className="font-medium text-2xl text-[var(--text-color)] mb-4">
              Spiced Mint Candleaf®
            </h1>
            {/* Info */}
            <div className="grid grid-cols-5 gap-4 items-center">
              {/* Price & Quantity */}
              <div className="col-span-1">
                <div className="flex flex-col gap-10">
                  <p className="font-semibold text-[var(--primary-color)] text-2xl">
                    $ 9.99
                  </p>
                  <div>
                    {/* Quantity Component */}
                    <Quantity />
                  </div>
                </div>
              </div>

              {/* Subscribe Component */}
              <div className="col-span-4">
                <Subscription />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
