import logo from "../assets/nav_img/logo.png";
// import cart from "../assets/nav_img/Cart.png";
import cart2 from "../assets/nav_img/cart.svg";

const NavBar = () => {
  return (
    <nav className="bg-[var(--background-color)] p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div>
          <img src={logo} alt="Store logo" className="w-32" />
        </div>
        <ul className="flex space-x-20">
          <li>
            <a href="/" className="navbar-link">
              Discovery
            </a>
          </li>
          <li>
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="navbar-link">
              Contact us
            </a>
          </li>
        </ul>
        <div className="relative cursor-pointer">
          <span className="absolute top-[-8px] right-[-4px] text-[var(--background-color)] bg-[var(--primary-color)] rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold z-20">
            1
          </span>
          <img src={cart2} alt="Cart Icon" className="w-7 relative " />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
