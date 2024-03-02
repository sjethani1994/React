import React, { useState } from "react";
import "./FailurePage.css"; // Assuming you have the stylesheet imported properly
import { useNavigate } from "react-router-dom";
function FailurePage() {
  const [popupOpen, setPopupOpen] = useState(true);
  const navigate = useNavigate();

  const closePopup = () => {
    setPopupOpen(false);
    navigate("/cart")
  };

  return (
    <div className="container">
      {popupOpen && (
        <div className="popup" id="popup">
          <div className="card failure-card">
            <img
              src="./paymentFailed.png"
              alt="paymentFailed"
              className="tick-image"
            />
            <h2 className="card-title">Sorry</h2>
            <p className="card-text">
              Something went wrong with your payment. Please try again.
            </p>
            <button type="button" onClick={closePopup} className="delete-button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FailurePage;
