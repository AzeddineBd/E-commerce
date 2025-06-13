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

      <div className="bg-[var(--background-color)] p-4 mt-4 w-full flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="text-lg text-[var(--primary-color)] font-medium mt-2">
            {price}
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center hover:scale-105"
        >
          +
          <img src="../public/assets/nav_img/Cart.png" alt="cart icon" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
