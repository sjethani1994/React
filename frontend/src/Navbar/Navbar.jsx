import React, { useState } from "react";
import "../App.css";
import eAuctionLogo from "../assests/eAutionLogo.png";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav>
      .
      <div style={{ flex: "1" }}>
        <img
          src={eAuctionLogo}
          class="img-responsive"
          alt="eAuction"
          style={{ width: "150px", height: "100px" }}
        />
      </div>
      <div>
        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="rest.html"> Auction </a>
          </li>
          <li>
            <a href="contact.html"> Auction </a>
          </li>
          <li>
            <a href="quest.html"> About us </a>
          </li>
          <li>
            <a href="contact.html"> Contact us </a>
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
            <a href="#" onClick={handleLogout}>
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
