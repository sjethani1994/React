import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation(); // Get location object
  const [product] = useState(JSON.parse(location.state));
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  function getTimeLeft() {
    const deadline = new Date("April 24, 2024 08:00:00").getTime();
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance <= 0) {
      return "Bidding Closed";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const handleBid = () => {
    // Implement your bid logic here
    console.log("Bid placed");
  };

  return (
    <div className="flex-box">
      <div className="left" style={{ flex: 1 }}>
        <div className="big-img">
          <img src={product.image} alt={product.subCategory} />
        </div>
      </div>

      <div className="right" style={{ flex: 1 }}>
        <div className="title">{product.title}</div>
        <div className="price">₹{product.price}</div>
        <div className="description text-justify">{product.description}</div>
        <div className="time-left">Time Left: {timeLeft}</div>
        <div className="bid-input">
          <input type="text" placeholder="Enter bid amount" />
          <button className="bid-btn btn-primary" onClick={handleBid}>
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
