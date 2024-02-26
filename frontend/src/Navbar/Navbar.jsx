import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import eAuctionLogo from "../assests/eAutionLogo.png";
import usePost from "../hooks/usePost";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { data, getUserHighestBidCount } = usePost();

  useEffect(() => {
    getUserHighestBidCount();
  }, []); // Empty dependency array ensures it runs only once on component mount

  // Ensure 'data' is defined before accessing its properties
  useEffect(() => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error handling data:", error);
    }
  }, [data]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("biddersData");
    sessionStorage.removeItem("userData");
    window.location.reload();
  };

  return (
    <nav>
      <div style={{ flex: "1" }}>
        <NavLink exact="true" activeclassname="active" to={"/"}>
          <img
            src={eAuctionLogo}
            className="img-responsive"
            alt="eAuction"
            style={{ width: "200px", height: "100px" }}
          />
        </NavLink>
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
            <a href="#top" className="cart">
              <span className="count">{data || 0}</span>
              <i className="fa-solid fa-cart-shopping material-icons"></i>
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
