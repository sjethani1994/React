import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../NewNavBar/NewNavbar.css";
import usePost from "../../hooks/usePost";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NewNavbar = () => {
  const { getUserHighestBidCount } = usePost();
  const navigate = useNavigate();
  useEffect(() => {
    getUserHighestBidCount();
  }, []); // Empty dependency array ensures it runs only once on component mount

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("biddersData");
    sessionStorage.removeItem("userData");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <div className="navbar-body">
        <header>
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
        <div className="search-box">
          <form>
            <label>Subscribe for Newsletter</label>
            <br />
            <input
              type="text"
              name="search"
              id="srch"
              placeholder="example@email.com"
            ></input>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
