import productImg from "../assets/products_img/image-1.png";

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center bg-[var(--background-light-section)] shadow-lg md:w-64">
      <div className="hover:scale-105 transition-transform duration-300">
        <img src={productImg} alt="#" className="bg-cover" />
      </div>

      <div className="bg-[var(--background-color)] p-4 mt-4 w-full">
        <h2 className="text-lg font-medium text-left">Product Name</h2>
        <p className="text-lg text-[var(--primary-color)] text-right  font-medium mt-2">
          $29.99
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
