import React, { useState, useContext } from "react";
import axios from "axios";
import API from "../connection/connection";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import HeaderContext from "../contexts/HeaderContext";
import "../styles/login.css";
import { Form, Button, Alert } from "react-bootstrap";
export default function Login() {
  const ctx = useContext(UserContext);
  const hctx = useContext(HeaderContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showerror, setShowError] = useState(false);

  const [errormessage, setErrorMsg] = useState("");

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setFieldErrors((prev) => ({ ...prev, [event.target.name]: "" }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let isValid = true;
      const newFieldErrors = { email: "", password: "" };

      if (!data.email) {
        isValid = false;
        newFieldErrors.email = "Email is required.";
      }

      if (!data.password) {
        isValid = false;
        newFieldErrors.password = "Password is required.";
      }

      if (!isValid) {
        setFieldErrors(newFieldErrors);
        return;
      }

      const response = await axios.post(`${API}/user/login`, data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("login", "true");
        hctx.setUsername(data.username);
        navigate("/home");
        ctx.setEnableHeader(true);
        ctx.setLogin(true);
      } else {
        setShowError(true);
        setErrorMsg(response.message);
      }
    } catch (error) {
      console.log(error);
      setShowError(true);
      setErrorMsg(error.response.data.message);
    }
  }
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center mt-5">
        {/* Form */}
        <Form style={{ width: "400px" }}>
          <div className="sign-in mb-4">Sign In</div>

          {/* Email Input */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={data.email}
            />
            <Form.Text className="text-muted"></Form.Text>
            {fieldErrors.email && (
              <Alert className="alert" variant="danger">
                {fieldErrors.email}
              </Alert>
            )}
          </Form.Group>

          {/* Password Input */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleChange}
            />
            {fieldErrors.password && (
              <Alert className="alert" variant="danger">
                {fieldErrors.password}
              </Alert>
            )}
          </Form.Group>

          {/* Sign In Button */}
          <Button
            variant="warning"
            type="button"
            className="mb-3"
            block
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          {/* Create Account Button */}
          <Button variant="warning" type="button" block>
            Create your account
          </Button>

          {/* Error Message */}
          {showerror && (
            <Alert variant="danger" className="mt-3">
              {errormessage}
            </Alert>
          )}
        </Form>

        {/* Forgot Password */}
        <div className="mt-3">
          <a href="#top">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}
