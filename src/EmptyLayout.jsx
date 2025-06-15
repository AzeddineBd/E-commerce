import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function EmptyLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default EmptyLayout;
