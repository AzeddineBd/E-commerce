import { createBrowserRouter } from "react-router-dom";
// import Pages
import MainLayout from "../MainLayout";
import EmptyLayout from "../EmptyLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ViewCart from "../pages/ViewCart";
import Thanks from "../pages/Thanks";
import Authentication from "../pages/Authentication";
import Payment from "../pages/Payment";
import Shipping from "../pages/Shipping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:id", element: <Product /> },
      { path: "view-cart", element: <ViewCart /> },
    ],
  },

  {
    path: "/",
    element: <EmptyLayout />,
    children: [
      { path: "thanks", element: <Thanks /> },
      { path: "auth", element: <Authentication /> },
      { path: "payment", element: <Payment /> },
      { path: "shipping", element: <Shipping /> },
    ],
  },
]);

export default router;
