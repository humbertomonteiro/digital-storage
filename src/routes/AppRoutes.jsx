import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Categories from "../pages/Categories";
import MyOrders from "../pages/MyOrders";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/my-orders" element={<MyOrders />} />
    </Routes>
  );
};

export default AppRoutes;
