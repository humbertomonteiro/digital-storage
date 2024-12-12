import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Categories from "../pages/Categories";
import MyOrders from "../pages/MyOrders";
import ProductViewPage from "../pages/ProductViewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/product-view/:id" element={<ProductViewPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
