import "./header.css";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Logo name="header" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/categories"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-orders"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Meus pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
