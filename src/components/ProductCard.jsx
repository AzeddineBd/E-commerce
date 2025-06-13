import { useNavigate } from "react-router-dom";
import Products from "../layout/Products";

const ProductCard = ({ id, name, price, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center bg-[var(--background-light-section)] shadow-lg w-full md:max-w-xs cursor-pointer"
    >
      <div className="hover:scale-105 transition-transform duration-300">
        <img
          src={`../public/assets/products_img/${image}`}
          alt={name}
          className="bg-cover"
        />
      </div>

      <div className="bg-[var(--background-color)] p-4 mt-4 w-full">
        <h2 className="text-lg font-medium text-left">{name}</h2>
        <p className="text-lg text-[var(--primary-color)] text-right  font-medium mt-2">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
