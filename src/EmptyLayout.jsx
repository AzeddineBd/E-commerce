import { Outlet } from "react-router-dom";

function EmptyLayout() {
  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
}

export default EmptyLayout;
