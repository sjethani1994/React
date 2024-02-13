import React, { useState } from "react";
import "./ProductList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProductList({ product }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    const maxLength = 60;
    if (showFullDescription) {
      return product.description;
    } else {
      if (product.description.length > maxLength) {
        return product.description.substring(0, maxLength) + "...";
      } else {
        return product.description;
      }
    }
  };

  return (
    <div className="card product-card">
      <div className="card-body product-card-body">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-details">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {getDescription()}
            {product.description.length > 60 && (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${product._id}`}>
                    {product.description}
                  </Tooltip>
                }
              >
                <span className="text-primary">(hover to read more)</span>
              </OverlayTrigger>
            )}
          </p>
          <p className="card-text">Price: ${product.price}</p>
          {/* Add more details if needed */}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
