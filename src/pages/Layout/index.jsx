import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {children}
      </BrowserRouter>
    </div>
  );
};

export default Layout;
