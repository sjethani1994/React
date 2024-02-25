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
    <div className="row row-cols-1 row-cols-md-4 g-4 ">
      <div className="col container-product p-0">
        <div className="cardImage ">
          <img
            src={`http://localhost:5000/${product.avatar.replace(/\\/g, "/")}`}
            alt={product.category}
            className="card-img-top"
          />
          <div className="card-body p-0"></div>
          <div className="card-footer">
            <h4 style={{ textAlign: "center", justifyContent: "center" }}>
              {product.title}
            </h4>
          </div>
        </div>
      </div>
      <div className="col card-one">
        <div className="card h-10">
          <div className="card-body">
            <h5 className="card-title"> {product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer">
            <span>
              <h3>
                Bid Amount: <label> {product.price}Rs</label>
              </h3>
            </span>
            <span>
              <h5>
                Enter Bid Amount:{" "}
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter bid amount"
                    aria-label="Enter bid amount"
                    aria-describedby="basic-addon2"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={handleBid}
                    >
                      Place Bid
                    </button>
                  </div>
                </div>
              </h5>
            </span>
            <div className="timer">
              <timer id="timer">{timeLeft}</timer>
            </div>
          </div>
        </div>
      </div>

      {/* ThirdCard */}
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">List of Participate Bidder</h5>
            <ol className="list-group list-group-numbered">
              {biddersList && biddersList.length > 0 ? (
                <ul>
                  {biddersList.map((bidder, index) => (
                    <li key={index} className="list-group-item">
                      {bidder.username} - Bid Amount: {bidder.bidAmount}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No bidders available</p>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
