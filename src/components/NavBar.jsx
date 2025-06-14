// import React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
// React hooks
import { useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
// React Route
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    if (cartItems.length > 0) {
      navigate("/view-cart");
    } else {
      alert("Empty Cart");
    }
  };

  // Toggle btn
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed mx-auto w-full bg-[var(--background-color)] p-4">
      {/* Desktop Navbar */}
      <div className="hidden container mx-auto md:flex justify-around items-center">
        <div>
          <a href="/">
            <img
              src="../public/assets/nav_img/logo.png"
              alt="Store logo"
              className="w-32 cursor-pointer"
            />
          </a>
        </div>
        <ul className="flex space-x-20">
          <li>
            <a href="#products" className="navbar-link">
              Discovery
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="navbar-link">
              Contact us
            </a>
          </li>
        </ul>

        {/* Cart icon */}
        <button onClick={handelClick}>
          <div className="relative cursor-pointer">
            {cartItems.length > 0 && (
              <span className="absolute top-[-8px] right-[-4px] text-[var(--background-color)] bg-[var(--primary-color)] rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold z-20">
                {cartItems.length}
              </span>
            )}

            <img
              src="../public/assets/nav_img/cart.svg"
              alt="Cart Icon"
              className="w-7 relative "
            />
          </div>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="container mx-auto md:hidden flex justify-between items-center">
        {/* Hamburger Menu Icon */}
        {!isOpen ? (
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <IoMdClose className="text-3xl cursor-pointer" onClick={toggleMenu} />
        )}

        <div>
          <a href="/">
            <img
              src="../public/assets/nav_img/logo.png"
              alt="Store logo"
              className="w-32 cursor-pointer"
            />
          </a>
        </div>
        <button onClick={handelClick}>
          <div className="relative cursor-pointer">
            {cartItems.length > 0 && (
              <span className="absolute top-[-8px] right-[-4px] text-[var(--background-color)] bg-[var(--primary-color)] rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold z-20">
                {cartItems.length}
              </span>
            )}

            <img
              src="../public/assets/nav_img/cart.svg"
              alt="Cart Icon"
              className="w-7 relative "
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } absolute top-16 left-0 right-0 z-50 bg-[var(--background-color)] shadow-md rounded-lg`}
        >
          <ul className="flex flex-col space-y-2 px-5 py-4 text-lg">
            <li>
              <a href="#products" className="navbar-link">
                Discovery
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="navbar-link">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

// Fix Descovery rout and about
