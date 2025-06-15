import CheckoutLayout from "../components/CheckoutLayout";
import { useCart } from "../context/useCart";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Shipping = () => {
  const { userInfo, setShippingMethod } = useCart();
  const { register, watch } = useForm();
  console.log(userInfo);

  const shippingChecked = watch("shippingOption");

  useEffect(() => {
    if (shippingChecked) {
      setShippingMethod("Free Shipping");
    } else {
      setShippingMethod("calculated");
    }
  }, [shippingChecked, setShippingMethod]);

  return (
    <CheckoutLayout currentStep="shipping">
      {/* Summary Info */}
      <div className="border-1 border-[var(--border-color)] rounded-lg md:p-4 p-2 flex flex-col gap-2 mb-8">
        <div className="flex justify-between items-start">
          <div className="flex md:gap-2 gap-1">
            <p className="text-[14px] text-[var(--text-gris)]">Contact</p>
            <p className="text-[14px]">{userInfo?.email}</p>
          </div>

          <button className="text-[var(--primary-color)] cursor-pointer underline">
            Edit
          </button>
        </div>
        <hr className="text-[var(--border-color)]" />
        <div className="flex justify-between items-start">
          <div className="flex md:gap-2 gap-1">
            <p className="text-[14px] text-[var(--text-gris)] text-nowrap">
              Ship to
            </p>
            <p className="text-[14px]">{userInfo?.address}</p>
          </div>

          <button className="text-[var(--primary-color)] cursor-pointer underline">
            Edit
          </button>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="flex flex-col gap-6 mb-8">
        <h2 className="text-xl font-medium">Shipping method</h2>

        <div className="border-1 border-[var(--border-color)] rounded-lg md:p-4 p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[var(--primary-color)]"
              {...register("shippingOption")}
            />
            <label className="text[14px]">Standard Shipping</label>
          </div>
          <p className="font-semibold text[14px]">Free</p>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Shipping;
