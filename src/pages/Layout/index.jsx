import "./layout.css";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="layout-main">{children}</main>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
