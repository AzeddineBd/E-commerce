import React from "react";
// image
import logo from "../assets/nav_img/logo.png";
import productImg from "../assets/product.jpg";
import CheckCircle from "../assets/CheckCircle.png";
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

const Thanks = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side */}
      <div className="p-4 md:p-8 lg:p-12 xl:p-20 max-w-3xl">
        {/* Logo */}
        <div className="mb-10">
          <img src={logo} alt="Logo Candleaf" />
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

        {/* Thanks */}

        <div className="mb-8 flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={CheckCircle} alt="Check Circle" />
            <h2 className="font-medium text-2xl">Payment Confirmed</h2>
            <p className="text-[var(--primary-color)] text-[14px]">
              ORDER #2039
            </p>
          </div>
          <div>
            <p className="text-[var(--text-gris)] text-[14px]">
              Thank you Joe for buying Candleaf. The nature is grateful to you.
              Now that your order is confirmed it will be ready to ship in 2
              days. Please check your inbox in the future for your order
              updates.
            </p>
          </div>
        </div>

        {/* Button & Back link */}
        <div className="flex flex-col items-center justify-between gap-4">
          <Button size="large">Back to shopping</Button>
          <a href="/" className="text-[var(--primary-color)] underline">
            Print receipt
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[var(--background-gris)] p-4 md:p-8 lg:p-12 xl:p-20">
        {/* Product img & name */}
        <div className="flex gap-10 border-b-2 border-[var(--border-color)] pb-8 max-w-lg">
          <img src={productImg} alt="Product" className="w-40" />
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

export default Thanks;
