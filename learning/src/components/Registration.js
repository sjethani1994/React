import React, { useEffect, useState } from "react";
import "../styles/registrationStyles.css";
import { Link } from "react-router-dom";
export default function Registration({ setToggle }) {
  function closeModal() {
    setToggle(true);
  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userDetails, setUserDetails] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(() => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }));
    setUserDetails((prev) => [...prev, formData]);
  };

  useEffect(() => {
    console.log("User Details:", userDetails);
  }, [userDetails]);

  return (
    <div>
      <h2>Registration</h2>
      <form className="modal-content">
        <label className="customlabel">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="customlabel">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="customlabel">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="customlabel">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <button onClick={closeModal} className="close-button">
        X
      </button>
      <Link to='/registration' style={{textDecoration:'none'}}>Go to Homepage</Link>
    </div>
  );
}
