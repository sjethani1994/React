import React from "react";
import "./ProductDetails.css";
function ProductDetails() {
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
  );
}

export default ProductDetails;
