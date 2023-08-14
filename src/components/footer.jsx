import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Column 1 */}
      <div className="footer-col">
        <h4>Links</h4>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Menu">Menu</a>
        <a href="#Reservation">Reservation</a>
        <a href="#OrderOnline">Order online</a>
        <a href="#Login">Login</a>
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
