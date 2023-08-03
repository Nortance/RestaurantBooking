import React from "react";
import Logo from "../images/Logo.svg";
const Nav = () => {
  return (
    <nav>
      <img src={Logo} />
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Menu">Menu</a>
        </li>
        <li>
          <a href="#Reservation">Reservation</a>
        </li>
        <li>
          <a href="#OrderOnline">Order online</a>
        </li>
        <li>
          <a href="#Login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
