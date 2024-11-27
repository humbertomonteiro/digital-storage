import "./header.css";

import { useState } from "react";

import Logo from "../Logo";
import { NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

import cart from "../../assets/mini-cart.svg";

const Search = () => {
  return (
    <label className="header-search">
      <input type="text" placeholder="Pesquisar produto..." />
      <CiSearch />
    </label>
  );
};

const ButtonsAuth = () => {
  return (
    <div className="header-buttons">
      <a href="#">Cadastre-se</a>
      <button>Entrar</button>
    </div>
  );
};

const Navbar = ({ type }) => {
  return (
    <nav className={type === "mobile" ? "navbar-mobile" : "navbar"}>
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
  );
};

const Header = () => {
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);

  const handleShowSearchMobile = () => {
    setShowSearchMobile(!showSearchMobile);
  };

  const handleShowNavbarMobile = () => {
    setShowNavbarMobile(!showNavbarMobile);
  };

  return (
    <header className="header container">
      <div className="header-content">
        <div onClick={handleShowNavbarMobile} className="icon-bars">
          <FaBars />
        </div>

        <Logo name="header" />

        <div className="header-group-search-buttons">
          <div className="container-search-desktop">
            <Search />
          </div>

          <div className="buttons-desktop">
            <ButtonsAuth />
          </div>
        </div>

        <div className="header-group-search-mobile-cart">
          <div
            onClick={handleShowSearchMobile}
            className="button-search-mobile"
          >
            <CiSearch />
          </div>

          <img src={cart} alt="Icone carrinho de compras" />
        </div>
      </div>

      <div className="container-navbar-desktop">
        <Navbar />
      </div>

      {showSearchMobile && (
        <div className="container-search-mobile">
          <Search />
        </div>
      )}

      {showNavbarMobile && (
        <div className="container-navbar-mobile">
          <Navbar type="mobile" />
          <ButtonsAuth />
        </div>
      )}
    </header>
  );
};

export default Header;
