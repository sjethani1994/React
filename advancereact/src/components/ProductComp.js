// Import necessary dependencies
import React, { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import "../styles/productComp.css";

// ProductComp component definition
export default function ProductComp() {
  const [quantity, setQuantity] = useState(1);
  // Access product data from ProductContext
  const ctx = useContext(ProductContext);
  const product = ctx.productById;

  // Check if product is not available
  if (!product) {
    return <div>Loading...</div>; // You can customize the loading state as needed
  }

  // Function to generate rating stars
  const generateRatingStars = () => {
    const ratingStars = [];
    const rating = Math.round(product.rating); // Round the rating to the nearest integer

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        ratingStars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === rating && rating % 1 !== 0) {
        ratingStars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        ratingStars.push(<i key={i} className="far fa-star"></i>);
      }
    }

    return ratingStars;
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value >= 1 && value <= 5) {
      setQuantity(value);
    }
  };
  // JSX structure for the ProductComp component
  return (
    <>
      <div className="flex-box">
        <div className="left" style={{ flex: 1 }}>
          <div className="big-img">
            <img src={product.image} alt={product.subCategory} />
          </div>
        </div>

        <div className="right" style={{ flex: 1 }}>
          <div className="title">{product.title}</div>
          <div className="ratings">{generateRatingStars()}</div>
          <div className="price">₹{product.price}</div>
          <div className="description text-justify">{product.description}</div>
          <div className="quantity">
            <p>Quantity :</p>
            <input
              type="number"
              min="1"
              max="5"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="btn-box">
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
