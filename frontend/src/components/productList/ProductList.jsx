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

  console.log(product)
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
    <div className="card product-card" onClick={gotoProductDetails}>
      <div className="card-body product-card-body">
        <img
          src={`http://localhost:5000/${product.avatar.replace(/\\/g, "/")}`}
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
        </div>
      </div>
      <div class="card-footer text-muted">
        <p className="card-text" style={{ fontWeight: "bold" }}>
          Price: ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductList;
