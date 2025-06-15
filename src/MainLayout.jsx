import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function MainLayout() {
  const location = useLocation();
  const hideFooterRoutes = ["/view-cart"]; // Bloked Pages

  return (
    <>
      <NavBar />
      <Outlet />
      {/* This logic for View cart page, for hide footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default MainLayout;
