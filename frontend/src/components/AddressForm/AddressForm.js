import React, { useState } from "react";
import { decryptData } from "../../utils/cryptoUtils";
import usePost from "../../hooks/usePost";
const AddressForm = ({ cartProducts, totalBidAmount, setShowAddressForm }) => {
  const [formData, setFormData] = useState({
    city: "New Delhi", // Default value for city
    country: "India", // Default value for country
    line1: "Street, PO Box, or company name", // Default value for line1
    line2: "Street2, PO Box2, or company name2", // Default value for line2
    postal_code: "110034", // Default value for postal_code
    state: "New Delhi", // Default value for state
    shipping_line1: "",
    shipping_postal_code: "",
    shipping_city: "",
    shipping_state: "",
    shipping_country: "",
  });

  const { placeOrderSession } = usePost();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = () => {
    if (document.getElementById("check-address").checked) {
      setFormData({
        ...formData,
        shipping_line1: formData.line1,
        shipping_city: formData.city,
        shipping_country: formData.country,
        shipping_postal_code: formData.postal_code,
      });
    } else {
      setFormData({
        ...formData,
        shipping_line1: "",
        shipping_city: "",
        shipping_country: "",
        shipping_postal_code: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const userData = decryptData(sessionStorage.getItem("userData"));
    const address = {
      city: formData.txtcity,
      country: formData.country,
      line1: formData.txtaddress,
      line2: formData.line2,
      postal_code: formData.postal_code,
      state: formData.state,
    };

    const shipping = {
      name: userData.user.firstName + " " + userData.user.lastName,
      address: {
        line1: formData.shipping_line1,
        postal_code: formData.shipping_postal_code,
        city: formData.shipping_city,
        state: formData.shipping_state,
        country: formData.shipping_country,
      },
    };

    const body = {
      product: cartProducts,
      amount: totalBidAmount,
      name: userData.user.firstName + " " + userData.user.lastName,
      email: userData.user.email,
      address: address,
      shipping: shipping,
    };

    setShowAddressForm(false);
    await placeOrderSession(body);
  };

  return (
    <>
      <div className="modal-backdrop">
        <div
          className="modal-card"
          style={{ height: "600px", overflowY: "scroll" }}
        >
          <header style={{ height: "60px", padding: "5px", boxShadow: "none" }}>
            <h3 className="text-dark" style={{ textAlign: "center" }}>
              Please Enter Your Address
            </h3>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Address Line 1</label>
                    <input
                      type="text"
                      id="txtaddress"
                      name="txtaddress"
                      placeholder="Street, PO Box, or company name"
                      className="form-control"
                      value={formData.txtaddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address Line 2</label>
                    <input
                      type="text"
                      id="line2"
                      name="line2"
                      placeholder="Street2, PO Box2, or company name2"
                      className="form-control"
                      value={formData.line2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      id="txtlname"
                      name="txtlname"
                      placeholder="Last Name"
                      className="form-control"
                      value={formData.txtlname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      className="form-control"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Country"
                      className="form-control"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="text"
                      id="postal_code"
                      name="postal_code"
                      placeholder="Postal Code"
                      className="form-control"
                      value={formData.postal_code}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State"
                      className="form-control"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        value=""
                        id="check-address"
                        style={{ marginRight: "10px" }}
                        onChange={handleCheckboxChange}
                      />
                      Same as billing?
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Billing Address</label>
                    <input
                      type="text"
                      id="shipping_line1"
                      name="shipping_line1"
                      placeholder="Billing Address"
                      className="form-control"
                      value={formData.shipping_line1}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="text"
                      id="shipping_postal_code"
                      name="shipping_postal_code"
                      placeholder="postal code"
                      className="form-control"
                      value={formData.shipping_postal_code}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Billing City</label>
                    <input
                      type="text"
                      id="shipping_city"
                      name="shipping_city"
                      placeholder="Billing City"
                      className="form-control"
                      value={formData.shipping_city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Billing Country</label>
                    <input
                      type="text"
                      id="shipping_country"
                      name="shipping_country"
                      placeholder="Billing Country"
                      className="form-control"
                      value={formData.shipping_country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-success"
                      type="submit"
                      value="Submit"
                      style={{ fontWeight: "bold" }}
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`.modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999; /* Ensure modal is on top of other content */
        }
        .modal-card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Box shadow for card */
          padding: 20px;
          width: 80%; /* Adjust width as needed */
          max-width: 600px; /* Maximum width for the card */
        }
        /* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.btn-success:hover {
  color: #fff;
  background-color: #3a4b59;
  border-color: #3a4b59;
}
.btn-success:active {
  color: #fff;
  background-color: #3a4b59 !important;
  border-color: #3a4b59 !important;
} 
.btn-success {
  color: #fff;
  background-color: #3a4b59;
  border-color: #3a4b59;
} `}
      </style>
    </>
  );
};

export default AddressForm;
