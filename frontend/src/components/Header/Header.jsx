import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
import logo from "../../image/SM Auction.png";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [itemsInCart, setitemsInCart] = useState(0);
  const { data, getUserHighestBidCount } = usePost();
  useEffect(() => {
    getUserHighestBidCount();
  }, []); // Empty dependency array ensures it runs only once on component mount

  useEffect(() => {
    if (data) setitemsInCart(data);
  }, [data]);
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
          <img
            src={logo}
            alt="sm auction logo"
            style={{ width: "30%", height: "auto" }}
          />
        </div>

        <ul id="navbar">
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              to={"/"}
              data-toggle="tooltip"
              data-placement="top"
              title="Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              to={"/addproduct"}
              data-toggle="tooltip"
              data-placement="top"
              title="Add Product"
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              to={"/aboutus"}
              data-toggle="tooltip"
              data-placement="top"
              title="About us"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              to={"/profile"}
              data-toggle="tooltip"
              data-placement="top"
              title="Profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              data-toggle="tooltip"
              data-placement="top"
              title="facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <Link
              className="cart-link"
              to={"/cart"}
              data-toggle="tooltip"
              data-placement="top"
              title="cart"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="cart-count">{itemsInCart}</span>
            </Link>
            <Link
              onClick={handleLogout}
              rel="noopener noreferrer"
              data-toggle="tooltip"
              data-placement="top"
              title="Logout"
            >
              <FontAwesomeIcon icon={faSignIn} />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
