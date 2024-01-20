/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/subHeaderStyles.css";
export default function SubHeader() {
  return (
    <>
      <div className="header-section-second">
        <div className="container-fluid row">
          <div className="col-1"></div>
          <div className="col-2">
            <a title="ShoppingGO" className="navbar-brand">
              <h2>ShoppingGO</h2>
              <sub className="sub-text">E-Commerce</sub>
            </a>
          </div>

          <div className="col-5 d-flex align-items-start">
            <div className="search-container w-100">
              <div className="row">
                <div className="col-md-12">
                  <form action="/action_page.php" className="d-flex">
                    <input
                      type="text"
                      placeholder="Search.."
                      name="search"
                      className="form-control no-border-radius"
                      id="searchProducts"
                    />
                    <button type="submit" className="btn btn-dark">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex m-0 align-items-center justify-content-start">
            <ul className="list-unstyled d-flex">
              <li className="nav-item">
                <a title="headphones" className="nav-link" aria-current="page">
                  <i className="fa-solid fa-headphones me-3"></i>
                </a>
              </li>
              <li className="nav-item me-5">
                <a title="call-us" className="nav-link" aria-current="page">
                  <p className="call-us">Call Us Now</p>
                  <sub className="phone-number">+001 5827918</sub>
                </a>
              </li>
              <li className="nav-item ms-3">
                <a title="user" className="nav-link" aria-current="page">
                  <i className="fa-regular fa-user me-3 infoLinks"></i>
                </a>
              </li>
              <li className="nav-item ms-3">
                <a title="heart" className="nav-link" aria-current="page">
                  <i className="fa-regular fa-heart me-3 infoLinks"></i>
                </a>
              </li>
              <li className="nav-item ms-3">
                <a
                  title="bag-shopping"
                  className="nav-link"
                  aria-current="page"
                >
                  <span className="position-relative">
                    <i className="fa-solid fa-bag-shopping me-3 infoLinks"></i>
                    <span
                      className="badge rounded-pill bg-dark position-absolute top-0 translate-middle"
                      id="badge-count"
                    >
                      0
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
