import React from "react";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
// Components
import Button from "../components/Button";

const steps = [
  { name: "Cart" },
  { name: "Details" },
  { name: "Shipping" },
  { name: "Payment" },
];

const Authentication = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side */}
      <div className="p-4 md:p-8 lg:p-12 xl:p-20 max-w-3xl">
        {/* Logo */}
        <div className="mb-10">
          <img src="../public/assets/nav_img/logo.png" alt="Logo Candleaf" />
        </div>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-14">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <span className="text-sm font-medium">{step.name}</span>
              {i < steps.length - 1 && (
                <MdKeyboardArrowRight className="text-gray-500" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-lg md:text-xl">Contact</h2>
            <p className="font-medium text-[14px] text-[var(--text-muted-color)]">
              Do you have an account?{" "}
              <a className="text-[var(--primary-color)] underline cursor-pointer">
                Login
              </a>
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border-1 border-[var(--border-color)] rounded-lg p-2 focus:outline-[var(--primary-color)]"
            />
          </div>
          <div>
            <input type="checkbox" id="add_me" className="mr-2" />
            <label htmlFor="add_me" className="text-[14px]">
              Add me to Candleaf newsletter for a 10% discount
            </label>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-xl font-medium">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
              <input
                type="text"
                placeholder="Second Name"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
            </div>
            <input
              type="text"
              placeholder="Address and number"
              className="rounded-md col-span-full w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
            />
            <input
              type="text"
              placeholder="Shipping note (optional)"
              className="rounded-md col-span-full w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
            />
            <input
              type="text"
              placeholder="City"
              className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
            />
            <input
              type="number"
              placeholder="Postal Code"
              className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
            />
            <input
              type="text"
              placeholder="Province"
              className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
            />
            <input
              type="text"
              placeholder="Country"
              className="rounded-md col-span-full w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
            />
            <div className="col-span-full">
              <input type="checkbox" id="add_me" className=" mr-2" />
              <label
                htmlFor="add_me"
                className="text-[var(--button-text-muted-color)] text-[14px]"
              >
                Save this informations for a future fast checkout
              </label>
            </div>
          </form>
        </div>

        {/* Button & Back link */}
        <div className="flex items-center justify-between">
          <a href="/" className="text-[var(--primary-color)] underline">
            Back to cart
          </a>
          <Button size="large">Go to shipping</Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[var(--background-gris)] p-4 md:p-8 lg:p-12 xl:p-20">
        {/* Product img & name */}
        <div className="flex gap-10 border-b-2 border-[var(--border-color)] pb-8 max-w-lg">
          <img
            src="../public/assets/product.jpg"
            alt="Product"
            className="w-40"
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Spiced Mint Candleaf®</h3>
            <p className="text-[var(--primary-color)] font-semibold">$9.99</p>
          </div>
        </div>

        {/* Coupone */}
        <div className="flex gap-4 border-b-2 border-[var(--border-color)] py-8 max-w-lg">
          <input
            type="text"
            placeholder="Coupone Code"
            className="rounded-md border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
          />
          <Button variant="mute">Add code</Button>
        </div>

        {/* Subtotal */}
        <div className="py-8 max-w-lg">
          <table className="w-full">
            <tbody>
              <tr className="py-4">
                <td className="py-3 text-[var(--text-muted-color)]">
                  Subtotal
                </td>
                <td className="text-right font-medium">$9.99</td>
              </tr>
              <tr>
                <td className="py-3 text-[var(--text-muted-color)]">
                  Shipping
                </td>
                <td className="text-right text-[14px] text-[var(--text-muted-color)]">
                  Calculated at the next step
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="py-4 font-semibold">Total</td>
                <td className="text-right font-semibold text-lg">$9.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
