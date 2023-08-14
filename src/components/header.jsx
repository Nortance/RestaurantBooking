import React from "react";
import Logo from "../images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="/" style={{ marginLeft: 0, paddingLeft: 0 }}>
          <img src={Logo} />
        </a>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Menu">Menu</a>
        <a href="#Reservation">Reservation</a>
        <a href="#Order0nline">Order online</a>
        <a href="#Login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
