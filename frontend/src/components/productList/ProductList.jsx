import React, { useState } from "react";
import "./ProductList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
function ProductList({ product }) {
  const [showFullDescription] = useState(false);

  const navigate = useNavigate();
  // Destructuring values returned by usePost hook
  const { getProductById } = useFetch();
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

  const gotoProductDetails = async (e) => {
    try {
      const { data, error } = await getProductById(product._id);

      if (data && data.status === 200) {
        navigate(`/productDetails/${product._id}`, {
          state: JSON.stringify(data.data.product),
        });
      } else {
        console.error("An error occurred:", error);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className="slider-container">
      <div className="slide-content">
        <div className="card-wrapper">
          <div className="card product-card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img
                  src={`http://localhost:5000/${product.avatar.replace(
                    /\\/g,
                    "/"
                  )}`}
                  className="card-img"
                  alt="Card"
                />
              </div>
            </div>
            <div className="card-content card-body row">
              <h2 className="name">{product.title}</h2>
              <p className="card-text" style={{ fontWeight: "bold" }}>
                Price: ${product.price}
              </p>
              <p className="description">
                {getDescription()}
                {product.description.length >= 10 && (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${product._id}`}>
                        {product.description}
                      </Tooltip>
                    }
                  >
                    <span className="text-primary">(read more)</span>
                  </OverlayTrigger>
                )}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center p-0" style={{borderTop: "none", backgroundColor: "transparent", }}>
              <button className="button" onClick={gotoProductDetails}>
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
