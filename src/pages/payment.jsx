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

const Payment = () => {
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

        {/* Summary Info */}
        <div className="border-1 border-[var(--border-color)] rounded-lg md:p-4 p-2 flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-start">
            <div className="flex md:gap-4 gap-1">
              <p className="text-[14px] text-[var(--text-gris)]">Contact</p>
              <p className="text-[14px]">joe.spagnuolo@uxbly.com</p>
            </div>

            <button className="text-[var(--primary-color)] cursor-pointer underline">
              Edit
            </button>
          </div>
          <hr className="text-[var(--border-color)]" />
          <div className="flex justify-between items-start">
            <div className="flex md:gap-4 gap-1">
              <p className="text-[14px] text-[var(--text-gris)] text-nowrap">
                Ship to
              </p>
              <p className="text-[14px]">
                Via Firenze 23, 92023, Campobello di Licata AG, Italia
              </p>
            </div>

            <button className="text-[var(--primary-color)] cursor-pointer underline">
              Edit
            </button>
          </div>
          <hr className="text-[var(--border-color)]" />
          <div className="flex justify-between items-start">
            <div className="flex md:gap-4 gap-1">
              <p className="text-[14px] text-[var(--text-gris)] text-nowrap">
                Method
              </p>
              <p className="text-[14px]">
                Standard Shipping -{" "}
                <span className="text-[14px] text-[var(--text-gris)] text-nowrap">
                  FREE
                </span>
              </p>
            </div>

            <button className="text-[var(--primary-color)] cursor-pointer underline">
              Edit
            </button>
          </div>
        </div>

        {/* Payment method */}
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="text-xl font-medium">Payment method</h2>

          <div className="border-1 border-[var(--border-color)] rounded-lg md:p-0 p-0 flex flex-col overflow-hidden">
            <h2
              className="w-full text-[var(--primary-color)] p-4 flex items-center gap-2 font-semibold"
              style={{ backgroundColor: "rgba(86, 178, 128, 0.4)" }}
            >
              <img
                src="../public/assets/CreditCardFill.png"
                alt="Credit Card image"
              />
              Credit Card
            </h2>
            <div className="p-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Holder Name"
                  className="w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Expiration (MM/YY)"
                  className="w-full border-1 border-[var(--border-color)]  p-2 focus:outline-[var(--primary-color)]"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border-1 border-[var(--border-color)]  p-2 focus:outline-[var(--primary-color)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tax Informations */}

        <div className="flex flex-col gap-6 mb-8">
          <h2 className="text-xl font-medium">Tax Informations</h2>
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="VAT number  (optional)"
                className="w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="PEC (optional)"
                className="w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
            </div>
          </div>
        </div>

        {/* Billing address */}

        <div className="flex flex-col gap-6 mb-8">
          <h2 className="text-xl font-medium">Billing address</h2>
          <div className="border-1 border-[var(--border-color)] rounded-lg md:p-4 p-2 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <input type="radio" />
              <label className="text[20px]">Same as the shipping address</label>
            </div>

            <div className="flex items-center gap-4">
              <input type="radio" />
              <label className="text[20px]">
                Use a different address for billing
              </label>
            </div>
          </div>
        </div>

        {/* Button & Back link */}
        <div className="flex items-center justify-between">
          <a href="/" className="text-[var(--primary-color)] underline">
            Back to Shipping
          </a>
          <Button size="medium">Pay now</Button>
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

export default Payment;
