import React from "react";
import "../styles/productStyles.css";
// Products component receives 'element' and 'index' as props
export default function Products({ element, index }) {
  return (
    // Each product is a part of a Bootstrap row with styling classes
    <div className="mt-4 mb-2 col-sm-12 col-lg-3">
      {/* Add a column with class 'col-sm-0 col-lg-1' at the beginning of each row */}
      {index % 3 === 0 && <div className="col-sm-0 col-lg-1"></div>}

      {/* Card component to display product information */}
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            {/* Image column */}
            <div className={`col-md-5 ${index === 0 ? "p-0" : ""}`}>
              <img
                src={element.thumbnail}
                alt="element"
                className="img-fluid"
                style={{ height: "240px" }}
              />
            </div>
            {/* Details column */}
            <div className="col-md-7 custom-card-body">
              <h5 className="card-title">Brand : {element.brand}</h5>
              <h5 className="card-title">Category : {element.category}</h5>
              <p className="card-text">Description : {element.description}</p>
              <p className="card-text fw-bold" style={{ paddingTop: "18px" }}>
                Price: ${element.price}
              </p>
            </div>
          </div>
        </div>

        {/* Card footer with buttons */}
        <div className="card-footer" style={{ backgroundColor: "white" }}>
          {/* Button to add product to cart (onClick needs to be implemented) */}
          <button className="btn btn-outline-success mt-3">Add to Cart</button>
          {/* Button to view product details (onClick needs to be implemented) */}
          <button
            className="btn btn-outline-dark mt-3"
            style={{ float: "inline-end" }}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Add a column with class 'col-sm-0 col-lg-1' at the end of each row */}
      {(index + 1) % 3 === 0 || index === element.length - 1 ? (
        <div className="col-sm-0 col-lg-1"></div>
      ) : null}
    </div>
  );
}
