import React from "react";
import "../styles/Bloglist.css";
function Bloglist() {
  return (
    <>
      <div
        className="card mb-3"
        style={{
          maxWidth: "540px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" // Replace with your actual image URL
              className="img-fluid rounded-start"
              alt="Card preview"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bloglist;
