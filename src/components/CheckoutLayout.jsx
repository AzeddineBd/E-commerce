import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "./button";

const steps = [
  { label: "Details", path: "auth" },
  { label: "Shipping", path: "shipping" },
  { label: "Payment", path: "payment" },
  { label: "Thanks", path: "thanks" },
];

const CheckoutLayout = ({ currentStep, children, onNext }) => {
  const navigate = useNavigate();

  const stepIndex = steps.findIndex((step) => step.path === currentStep);

  const goToNextStep = () => {
    if (stepIndex < steps.length - 1) {
      const nextPath = steps[stepIndex + 1].path;
      navigate(`/${nextPath}`);
    }
  };

  const goBack = () => navigate(-1);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left */}
      <div className="p-8 max-w-3xl">
        <div className="mb-10">
          <Link to="/">
            <img src="../public/assets/nav_img/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center gap-2 mb-10">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <span
                className={`text-sm font-medium ${
                  i === stepIndex ? "text-[var(--primary-color)]" : ""
                }`}
              >
                {step.label}
              </span>
              {i < steps.length - 1 && <MdKeyboardArrowRight />}
            </React.Fragment>
          ))}
        </div>

        {/* Content */}
        {children}

        {/* Button to go to next step */}
        {stepIndex < steps.length - 1 && (
          <div className="mt-8 flex items-center justify-between">
            <a
              onClick={goBack}
              className="cursor-pointer text-[var(--primary-color)] underline hover:scale-103 transition-transform duration-300"
            >
              Go Back
            </a>
            <a onClick={onNext}>
              <Button>Next</Button>
            </a>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="bg-[var(--background-gris)] p-8">
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
      </div>
    </section>
  );
};

export default CheckoutLayout;
