import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../NewNavBar/NewNavbar.css";
import usePost from "../../hooks/usePost";
import Header from "../Header/Header";
import ribbon from "../../image/screenshotmyntra.png";
const NewNavbar = () => {
  const { getUserHighestBidCount } = usePost();
  useEffect(() => {
    getUserHighestBidCount();
  }, []); // Empty dependency array ensures it runs only once on component mount

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
