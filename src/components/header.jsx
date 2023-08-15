import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
      <nav>
        <Link style={{ marginLeft: 0, paddingLeft: 0 }} to="/">
          <img src={Logo} alt="Website Logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/orderonline">Order online</Link>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            toggleModal();
          }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
