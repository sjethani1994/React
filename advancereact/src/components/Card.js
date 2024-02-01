import axios from "axios";
import React, { useContext } from "react";
import API from "../connection/connection";
import ProductContext from "../contexts/ProductContext";

export default function Card({ element, enablebtn }) {
  const ctx = useContext(ProductContext);
  const getProductById = async (_id) => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.get(`${API}/product/getProductById/${_id}`, {
        headers,
      });

      const { product } = response.data.product;
      ctx.setEnablebtn(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "20px",
        height: "39rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adjust shadow values as needed
        backgroundColor: "#f8f9fa", // Light background color
      }}
    >
      <img
        src={element.image}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", maxHeight: "300px" }}
      />
      <div className="card-body">
        <h6 className="card-text fw-bold">{element.title}</h6>
        <p className="card-text">{element.description}</p>
      </div>

      <div className="card-footer">
        {enablebtn && (
          <button
            className="btn btn-primary w-100"
            onClick={() => getProductById(element._id)}
          >
            View Product
          </button>
        )}
      </div>
    </div>
  );
}
