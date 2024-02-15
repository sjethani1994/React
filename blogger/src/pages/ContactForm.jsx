import axios from "axios";
import React, { useState } from "react";
import API from "../connection/connection";
import { swalError, swalSuccess } from "../utils/Swal";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors({}); // Clear any previous errors
      if (!email) {
        setErrors({ email: "Email is required." });
        return;
      }

      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      // Make sure to replace formData with the correct data
      const response = await axios.post(
        `${API}/auth/newsLetter`,
        { email },
        {
          headers,
        }
      );

      if (response.status === 200) {
        swalSuccess("", response.data.message);
        setEmail("")
      }
    } catch (error) {
      if (error.response) {
        swalError("", error.response.data.error);
      } else {
        swalError("", error.message);
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="footer-col">
      <h2>Contact us</h2>
      <p className="lead fs-4 text-secondary mb-3">
        Stay in the loop! Subscribe to our blog for a weekly dose of news,
        updates, helpful tips, and exclusive offers.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "7px 15px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>
      <div className="icons">
        <i
          className="fa-brands fa-facebook-f"
          style={{ marginRight: "10px" }}
        ></i>
        <i className="fa-brands fa-twitter" style={{ marginRight: "10px" }}></i>
        <i
          className="fa-brands fa-linkedin"
          style={{ marginRight: "10px" }}
        ></i>
        <i className="fa-brands fa-github" style={{ marginRight: "10px" }}></i>
      </div>
    </div>
  );
};

export default ContactForm;
