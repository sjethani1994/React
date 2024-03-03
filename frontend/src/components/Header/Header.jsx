import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("biddersData");
    sessionStorage.removeItem("userData");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <header
        className={
          location.pathname !== "/" ? "transparent-background" : "background"
        }
      >
        <input type="checkbox" name="" id="chk1" />
        <div className="navbar-logo">
          <h1>E-Auction</h1>
        </div>

        <ul id="navbar">
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
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <Link onClick={handleLogout} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSignIn} />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
