import React from "react";

// Importing the CSS file for styling
import "../styles/body.css";

// Importing the Card component
import Card from "./Card";

// Importing mock data (assuming 'product' is an array of products)
import product from "../mockdata/product";
import Carousel from "./Carousel";
import Products from "./Products";

// Body component renders a list of cards based on the provided data
export default function Body() {
  return (
    // Container with the 'box' class for styling
    <div className="box">
      <Carousel />

      <Card />
      {/* Heading for the section */}
      <h4>Products</h4>

      {/* Conditional rendering based on whether 'product' array has data */}
      {product.length !== 0 ? (
        // If data is available, map through the 'product' array and render a Card component for each element
        <div className="row products-section">
          {product.map((element, index) => (
            <Products element={element} index={index} key={index} />
          ))}
        </div>
      ) : (
        // If no data is available, display a message
        <div>No data</div>
      )}
    </div>
  );
}
