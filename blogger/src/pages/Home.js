import React from "react";
import "../styles/Home.css";
import "../styles/HomeButtons.css";
import Bloglist from "./Bloglist";

const Home = () => {
  return (
    <div className="body">
      <Bloglist />
    </div>
  );
};

export default Home;
