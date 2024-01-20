import React from "react";
import "../styles/carouselStyles.css";
export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide coursel-section"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
          className="d-block w-100 carousel-img"
            src="lifestyle-shopping.png"
            alt="First slide"
          />
        </div>
      </div>
    </div>
  );
}
