import React, { useState } from "react";
import "./ThankyouStyles.css"; // Assuming you have the stylesheet imported properly

function ThankyouPage() {
  const [popupOpen, setPopupOpen] = useState(true);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="container">
    {popupOpen && (
      <div className="popup" id="popup">
        <div className="card thankyou-card">
          <img src="./404-tick.png" alt="tickimage" className="tick-image" />
          <h2 className="card-title">Thank You!</h2>
          <p className="card-text">
            Your payment has been successfully completed. Thanks!
          </p>
          <button type="button" onClick={closePopup} className="ok-button">
            OK
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default ThankyouPage;
