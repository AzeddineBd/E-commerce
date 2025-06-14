import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function EmptyLayout() {
  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
}

export default EmptyLayout;
