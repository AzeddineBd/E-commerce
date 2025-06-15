import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "./button";
import { RightSideOfSteps } from "../layout/RightSideOfsteps";

const steps = [
  { label: "Details", path: "auth" },
  { label: "Shipping", path: "shipping" },
  { label: "Payment", path: "payment" },
  { label: "Thanks", path: "thanks" },
];

const CheckoutLayout = ({ currentStep, children, onNext }) => {
  const navigate = useNavigate();

  const stepIndex = steps.findIndex((step) => step.path === currentStep);

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
      <RightSideOfSteps />
    </section>
  );
};

export default CheckoutLayout;
