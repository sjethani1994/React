import React, { useState } from "react";
import "../styles/headerStyles.css";
import Registration from "./Registration";
export default function Header() {
  const [toggle, setToggle] = useState(true);

  function changeName() {
    setToggle((prev) => !prev);
  }

  let headerStyles = {
    backgroundColor: toggle ? "#343a40" : "white",
  };

  let fontStyles = {
    color: toggle ? "white" : "#343a40",
  };
  return (
    <div className="header-section" style={headerStyles}>
      <h4 style={fontStyles} onClick={changeName}>
        {toggle ? <span>login</span> : <span>Sumit</span>}
      </h4>
      <div
        className="container-fluid d-flex justify-content-around"
        style={fontStyles}
      >
        {/* Brand and Navigation Links */}
        <a title="welcome" className="navbar-brand mt-2" href="#top">
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
              <img src="india.png" alt="India flag" className="indian-flag" />
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
      <div>
        {!toggle && (
          <div className="modal-background">
            <Registration setToggle={setToggle} />
          </div>
        )}
      </div>
    </div>
  );
}
