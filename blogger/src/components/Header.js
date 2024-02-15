import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-header py-2 px-4 px-xl-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
          style={{ width: "5%" }}
          alt=""
        />
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active" style={{paddingLeft: "10px"}}>
            <Link className="nav-link" to={"/home"} >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item" style={{paddingLeft: "10px"}}>
            <Link className="nav-link" to={"/addBlog"}>
              Add Blog
            </Link>
          </li>
          <li className="nav-item" style={{paddingLeft: "10px"}}>
            <Link className="nav-link" to={"/aboutUs"} >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
