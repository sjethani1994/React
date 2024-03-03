import React, { useEffect, useState } from "react";
import "./ThankyouStyles.css"; // Assuming you have the stylesheet imported properly
import { decryptData } from "../../utils/cryptoUtils";
import { useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
function ThankyouPage() {
  const [popupOpen, setPopupOpen] = useState(true);
  const navigate = useNavigate();
  const {data, error, placeOrder} = usePost();
  const productIds = decryptData(sessionStorage.getItem("productIds"));

  useEffect(() => {
    placeOrder(JSON.parse(productIds));
  }, [])
  
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    navigate("/");
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
