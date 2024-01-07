import React from "react";
import "../styles/headerStyles.css";
export default function Header() {
  return (
    <div className="header-section">
      <div className="container-fluid d-flex justify-content-around">
        {/* Brand and Navigation Links */}
        <a title="welcome" className="navbar-brand mt-2" href="#top" >
          Welcome to Shopping Store
        </a>
        <ul className="list-unstyled d-flex m-2">
          {/* Navigation links */}
          <li className="nav-item me-4">
            <a title="trackOrder" className="nav-link" href="#top">
              Track Order
            </a>
          </li>
          <li className="nav-item me-4">
            <a title="about" className="nav-link" href="top">
              About
            </a>
          </li>
          <li className="nav-item me-4">
            <a title="stores" className="nav-link" href="#top">
              Our Stores
            </a>
          </li>
          <li className="nav-item me-4">
            <a title="contact" className="nav-link" href="#top">
              Contact
            </a>
          </li>
          <li className="nav-item me-4">
            <a title="FAQ's" className="nav-link" href="#top">
              Help & FAQs
            </a>
          </li>
          <li className="nav-item me-4">
            <a title="flag" className="nav-link" href="#top">
              <img
                src="../assests/india.png"
                alt="India flag"
                className="indian-flag"
              />
              IND
            </a>
          </li>
          <li className="nav-item me-4">
            <a title="ENG" className="nav-link" href="#top">
              ENG
            </a>
          </li>
          {/* Social media links */}
          <li className="nav-item ms-5">
            <a title="facebook" className="nav-link" href="#top">
              <i className="fa-brands fa-facebook-f me-3"></i>
            </a>
          </li>
          <li className="nav-item ms-2">
            <a title="twitter" className="nav-link" href="#top">
              <i className="fa-brands fa-twitter me-3"></i>
            </a>
          </li>
          <li className="nav-item ms-2">
            <a title="linkedin" className="nav-link" href="#top">
              <i className="fa-brands fa-linkedin me-3"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
