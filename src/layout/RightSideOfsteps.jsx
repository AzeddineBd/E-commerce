import Button from "../components/Button";
import { useCart } from "../context/useCart";

export const RightSideOfSteps = () => {
  const { cartItems, shippingMethod } = useCart();
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[var(--background-gris)] p-8">
      <div className="bg-[var(--background-gris)] p-4 md:p-8 lg:p-12 xl:p-20">
        {/* Product img & name */}
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-10 border-b-2 border-[var(--border-color)] pb-8 max-w-lg mb-4"
          >
            <img
              src={`../public/assets/products_img/${item.image}`}
              alt="Product"
              className="w-40"
            />
            <div className="flex flex-col gap-4">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-[var(--primary-color)] font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}

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
                <td className="text-right font-medium">
                  ${subTotal.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="py-3 text-[var(--text-muted-color)]">
                  Shipping
                </td>
                <td className="text-right text-[14px] font-semibold">
                  {shippingMethod}
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="py-4 font-semibold">Total</td>
                <td className="text-right font-semibold text-lg">
                  ${subTotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
