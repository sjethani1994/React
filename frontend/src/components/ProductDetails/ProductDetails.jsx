import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
import usePost from "../../hooks/usePost"; // Import the usePost hook

function ProductDetails() {
  const location = useLocation(); // Get location object
  const [product] = useState(JSON.parse(location.state));
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [amount, setAmount] = useState(""); // Initialize amount state with an empty string
  const { data, error, placeBid } = usePost(); // Destructure values returned by usePost hook

  // Function to calculate time left until bidding ends
  function getTimeLeft() {
    const deadline = new Date(product.endDate).getTime(); // Use product.endDate to calculate deadline
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

  // Effect to update timeLeft every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Function to handle bid placement
  const handleBid = async () => {
    if (isNaN(amount) || amount <= 0) {
      // Validate bid amount
      console.log("Invalid bid amount");
      return;
    }
    console.log("Bid placed", product._id);
    await placeBid(product._id, amount);
  };

  // Effect to handle navigation after successful bid placement or errors
  useEffect(() => {
    if (data) {
      console.log(data);
      // Handle successful bid placement, e.g., redirect to a confirmation page
    }
    if (error) {
      console.error(error);
      // Handle error, e.g., display an error message to the user
    }
  }, [data, error]);

  // Effect to listen to socket changes

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
          <input
            type="number" // Change input type to number for bid amount
            placeholder="Enter bid amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="bid-btn btn-primary" onClick={handleBid}>
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
