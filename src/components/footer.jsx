import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Column 1 */}
      <div className="footer-col">
        <h4>Links</h4>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/orderonline">Order online</Link>
        <Link to="/login">Login</Link>
      </div>

      {/* Column 2 */}
      <div className="footer-col">
        <h4>Contact</h4>
        <p>Phone: (123) 456-7890</p>
        <p>Email: example@example.com</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>

      {/* Column 3 */}
      <div className="footer-col">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#" className="icon-instagram">
            Instagram
          </a>
          <a href="#" className="icon-facebook">
            Facebook
          </a>
          <a href="#" className="icon-pinterest">
            Pinterest
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
