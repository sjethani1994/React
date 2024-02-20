import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
import usePost from "../../hooks/usePost"; // Import the usePost hook
import { swalError } from "../../utils/Swal";

function ProductDetails({ productData }) {
  const location = useLocation(); // Get location object
  const [product] = useState(JSON.parse(location.state));
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [amount, setAmount] = useState(""); // Initialize amount state with an empty string
  const { error, placeBid } = usePost(); // Destructure values returned by usePost hook
  const [biddersList, setbiddersList] = useState([]);
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
      swalError("", "Please enter a valid bid amount greater than zero.");
      return;
    }

    if (amount < product.price) {
      swalError(
        "",
        `Bid amount must be higher than the product's actual price of ${product.price}.`
      );
      return;
    }

    await placeBid(product._id, amount);
  };

  useEffect(() => {
    // Check if productData exists
    if (productData) {
      // Find the product with matching _id
      const matchingProduct = productData.find((element) => {
        return element._id === product._id;
      });
      if (matchingProduct) {
        let sortedBidders = [];
        if (matchingProduct.bidders.length > 0) {
          sortedBidders = matchingProduct.bidders.sort(
            (a, b) => b.bidAmount - a.bidAmount
          ); // Sort by bidAmount
        }
        setbiddersList(sortedBidders);
      } else {
        // Reset biddersList if productData doesn't contain the product with matching _id
        setbiddersList(product.bidders);
      }
    } else {
      // Reset biddersList if productData is empty
      setbiddersList(null);
    }

    if (error) {
      console.error(error);
    }
  }, [productData, error, product]);

  return (
    <div className="flex-box">
      <div className="left" style={{ flex: 1 }}>
        <div className="big-img">
          <img
            src={`http://localhost:5000/${product.avatar.replace(/\\/g, "/")}`}
            alt={product.category}
          />
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
        <div className="bidders-list">
          <h3>List of Bidders</h3>
          {biddersList && biddersList.length > 0 ? (
            <ul>
              {biddersList.map((bidder, index) => (
                <li key={index}>
                  {bidder.username} - Bid Amount: {bidder.bidAmount}
                </li>
              ))}
            </ul>
          ) : (
            <p>No bidders available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
