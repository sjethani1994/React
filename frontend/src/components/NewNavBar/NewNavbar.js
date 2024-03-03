import React from "react";
import "../NewNavBar/NewNavbar.css";
import Header from "../Header/Header";
import ribbon from "../../image/screenshotmyntra.png";
const NewNavbar = () => {
  return (
    <>
      <div className="navbar-body">
        <Header />
        <div className="centeredImage">
          <img src={ribbon} alt="ribbon" />
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
