// Product.js
import React, { Component } from "react";
import "../styles/ProductList.css";

class ProductList extends Component {
  state = {
    isInStock: true,
  };

  toggleStockStatus = () => {
    this.setState((prevState) => ({
      isInStock: !prevState.isInStock,
    }));
  };

  render() {
    return (
      <div className="product-container">
        <h2>Product Information</h2>
        <p className="product-info">Product Name: Example Product</p>
        <p
          className={`stock-status ${
            !this.state.isInStock && "product-out-of-stock"
          }`}
        >
          Status: {this.state.isInStock ? "In Stock" : "Out of Stock"}
        </p>
        <button className="toggle-button" onClick={this.toggleStockStatus}>
          Toggle Stock Status
        </button>
      </div>
    );
  }
}

export default ProductList;
