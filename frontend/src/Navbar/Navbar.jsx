import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import eAuctionLogo from "../assests/eAutionLogo.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("biddersData");
    sessionStorage.removeItem("userData");
    window.location.reload();
  };

  return (
    <nav>
      <div style={{ flex: "1" }}>
        <img
          src={eAuctionLogo}
          className="img-responsive"
          alt="eAuction"
          style={{ width: "150px", height: "100px" }}
        />
      </div>
      <div>
        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
          <li>
            <NavLink exact="true" activeclassname="active" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to={"/addproduct"}>
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to={"/aboutus"}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to={"/profile"}>
              Profile
            </NavLink>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#top" onClick={handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
