// Components
import CheckoutLayout from "../components/CheckoutLayout";
import { authSchema } from "../validatuions/authSchema";
import { useStepForm } from "../hooks/useStepForm";

const Authentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useStepForm(authSchema, "/shipping");

  return (
    <>
      <CheckoutLayout currentStep="auth" onNext={handleSubmit(onSubmit)}>
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
              {...register("email")}
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full border-1 border-[var(--border-color)] rounded-lg p-2 focus:outline-[var(--primary-color)]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
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
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("secondName")}
                  type="text"
                  placeholder="Second Name"
                  className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
                />
                {errors.secondName && (
                  <p className="text-red-500 text-sm">
                    {errors.secondName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <input
                {...register("address")}
                type="text"
                placeholder="Address and number"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>
            <div className="col-span-full ">
              <input
                type="text"
                placeholder="Shipping note (optional)"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
            </div>
            <div>
              <input
                {...register("city")}
                type="text"
                placeholder="City"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("postalCode")}
                type="text"
                placeholder="Postal Code"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />

              {errors.postalCode && (
                <p className="text-red-500 text-sm">
                  {errors.postalCode.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("province")}
                type="text"
                placeholder="Province"
                className="rounded-md w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
              {errors.province && (
                <p className="text-red-500 text-sm">
                  {errors.province.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("country")}
                type="text"
                placeholder="Country"
                className="rounded-md col-span-full w-full border-1 border-[var(--border-color)] p-2 focus:outline-[var(--primary-color)]"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>
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
