import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function MainLayout() {
  const location = useLocation();
  const hideFooterRoutes = ["/view-cart"]; // Bloked Pages

  return (
    <div>
      <NavBar />
      <Outlet />
      {/* This logic for View cart page, for hide footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default MainLayout;
