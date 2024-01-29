import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../connection/connection";

export default function Register({ setEnableHeader }) {
  // State to store form data
  const [registerdata, setRegisterData] = useState({});

  // State to store field-level errors
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    username: "",
    password: "",
  });

  // State to control the display of global error message
  const [showerror, setShowError] = useState(false);

  // State to store global error message
  const [errormessage, setErrorMsg] = useState("");

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle input changes in the form
  function handleChange(event) {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // Clear the error message for the current field when the user types
    setFieldErrors((prev) => ({ ...prev, [event.target.name]: "" }));
  }

  // Function to handle form submission
  async function PopulatetoDB() {
    // Validate form fields
    let isValid = true;
    const newFieldErrors = { email: "", username: "", password: "" };

    // Check if email is provided
    if (!registerdata.email) {
      isValid = false;
      newFieldErrors.email = "Email is required.";
    }

    // Check if username is provided
    if (!registerdata.username) {
      isValid = false;
      newFieldErrors.username = "Username is required.";
    }

    // Check if password is provided
    if (!registerdata.password) {
      isValid = false;
      newFieldErrors.password = "Password is required.";
    }

    // If any field is not filled, update the state with error messages
    if (!isValid) {
      setFieldErrors(newFieldErrors);
      return;
    }

    try {
      // All fields are filled, make the API call
      const response = await axios.post(`${API}/user/register`, registerdata);
      if (response.status === 201) {
        // Registration successful, navigate to home
        navigate("/home");
        setEnableHeader(true);
      } else {
        // Show global error message
        setShowError(true);
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      console.log(error);
      // Show global error message
      setShowError(true);
      setErrorMsg(error.response.data.message);
    }
  }

  // JSX for the registration form
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={registerdata.email}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handleChange}
        />
        {fieldErrors.email && (
          <div style={{ color: "red" }}>{fieldErrors.email}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={registerdata.username}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="pegasis1234"
          onChange={handleChange}
        />
        {fieldErrors.username && (
          <div style={{ color: "red" }}>{fieldErrors.username}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={registerdata.password}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="password"
          onChange={handleChange}
        />
        {fieldErrors.password && (
          <div style={{ color: "red" }}>{fieldErrors.password}</div>
        )}
      </div>

      {/* Submit button */}
      <button onClick={PopulatetoDB}>Submit</button>

      {/* Display global error message */}
      {showerror && <div style={{ color: "red" }}>{errormessage}</div>}
    </>
  );
}
