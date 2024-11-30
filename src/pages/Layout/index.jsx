import "./layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <main className="layout-main">{children}</main>
        <Footer />  
      </BrowserRouter>
    </div>
  );
};

export default Layout;
