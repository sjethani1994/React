import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
import usePost from "../../hooks/usePost"; // Import the usePost hook
import { swalError } from "../../utils/Swal";

function ProductDetails({ productData }) {
  const location = useLocation(); // Get location object
  const [product] = useState(JSON.parse(location.state));
  const [timeLeft, setTimeLeft] = useState(null);
  const [amount, setAmount] = useState(""); // Initialize amount state with an empty string
  const { error, placeBid } = usePost(); // Destructure values returned by usePost hook
  const [biddersList, setbiddersList] = useState([]);
  // Function to calculate time left until bidding ends
  function getTimeLeftForProducts(startDate, endDate) {
    // Check if both startDate and endDate are provided
    if (!startDate || !endDate) {
      return "Invalid date range";
    }

    const deadline = new Date(endDate).getTime();
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
      // Pass product.startDate and product.endDate to getTimeLeftForProducts
      setTimeLeft(getTimeLeftForProducts(product.startDate, product.endDate));
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [product.startDate, product.endDate]);

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
    setAmount("");
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
    <div className="card-wrapper product-card-wrapper">
      <div className="card product-detail-card">
        {/* Card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img
                className="product-img"
                src={`http://localhost:5000/${product.avatar.replace(
                  /\\/g,
                  "/"
                )}`}
                alt="Product"
              />
            </div>
          </div>
        </div>
        {/* Card right */}
        <div className="product-content">
          <h2 className="product-title">{product.title}</h2>
          <div className="product-timer">
            <timer id="timer">{timeLeft}</timer>
          </div>

          <div className="product-price">
            <p className="last-price">
              Min Bid Price: <span>{product.price} Rs</span>
            </p>
            <p className="new-price">
              Enter your Bid Price:{" "}
              <span>
                <input
                  type="number"
                  min="0"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="12345"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </span>
            </p>
          </div>
          <div class="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" class="btn" onClick={handleBid}>
              Place Bid <i class="fa fa-gavel"></i>
            </button>
          </div>
          <div className="product-detail">
            <h2>
              Number of Bids: <span>{biddersList.length}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
