// Components
import CheckoutLayout from "../components/CheckoutLayout";

const Authentication = () => {
  return (
    <>
      <CheckoutLayout currentStep="auth">
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
              <label htmlFor="add_me" className="text-[14px]">
                Save this informations for a future fast checkout
              </label>
            </div>
          </form>
        </div>
      </CheckoutLayout>
    </>
  );
};

export default Authentication;
