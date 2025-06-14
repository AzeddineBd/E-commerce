// Components
import Button from "../components/Button";
import CheckoutLayout from "../components/CheckoutLayout";

const steps = [
  { name: "Cart" },
  { name: "Details" },
  { name: "Shipping" },
  { name: "Payment" },
];

const Thanks = () => {
  return (
    <CheckoutLayout currentStep="thanks">
      {/* Thanks */}

      <div className="mb-8 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src="../public/assets/CheckCircle.png" alt="Check Circle" />
          <h2 className="font-medium text-2xl">Payment Confirmed</h2>
          <p className="text-[var(--primary-color)] text-[14px]">ORDER #2039</p>
        </div>
        <div>
          <p className="text-[var(--text-gris)] text-[14px]">
            Thank you Joe for buying Candleaf. The nature is grateful to you.
            Now that your order is confirmed it will be ready to ship in 2 days.
            Please check your inbox in the future for your order updates.
          </p>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Thanks;
