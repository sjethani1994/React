import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg custom-header py-2 px-4 px-xl-5">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
          style={{ width: "5%" }}
          alt=""
        />
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#">
              Link
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link disabled" href="#">
              Disabled
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
