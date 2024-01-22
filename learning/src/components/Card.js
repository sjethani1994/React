import React from "react";

export default function Card({ product }) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
