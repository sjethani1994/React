import React from "react";
import eAuctionBannerFirst from "../../assests/eAuctionIBanner1.jpg";
import eAuctionBannerSecond from "../../assests/eAuctionBanner2.jpg";
import eAuctionBannerThird from "../../assests/eAuctionBanner3.png";
import eAuctionBannerFourth from "../../assests/eAuctionBanner4.jpg";
const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      style={{ height: "340px" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block"
            src={eAuctionBannerFirst}
            alt="First slide"
            style={{ height: "340px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block"
            src={eAuctionBannerSecond}
            alt="Second slide"
            style={{ height: "340px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block"
            src={eAuctionBannerThird}
            alt="Third slide"
            style={{ height: "340px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block"
            src={eAuctionBannerFourth}
            alt="Fourth slide"
            style={{ height: "340px" }}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
