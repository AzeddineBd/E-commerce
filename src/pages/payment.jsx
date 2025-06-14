import CheckoutLayout from "../components/CheckoutLayout";

const Payment = () => {
  return (
    <>
      <CheckoutLayout currentStep="payment">
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
      </CheckoutLayout>
    </>
  );
};

export default Payment;
