import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logoImage from "../images/BlogWaleLogo.PNG";
const Header = () => {
  return (
    <header className="blog-header">
      <div className="logo">
        <img
          src={logoImage}
          alt="blog"
          style={{ width: "164px", minHeight: "20px", height: "auto" }}
        />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
