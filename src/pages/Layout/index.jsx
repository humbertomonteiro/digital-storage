import "./layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BrowserRouter } from "react-router-dom";

import ProductsProvider from "../../data/contexts/ProductsContext";

const Layout = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        <ProductsProvider>
          <Header />
          <main className="layout-main">{children}</main>
          <Footer />
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
