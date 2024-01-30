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
    username: "",
    password: "",
  });
  const [showerror, setShowError] = useState(false);

  const [errormessage, setErrorMsg] = useState("");

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    username: "",
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
    event.preventDefault(); // Add this line
    try {
      let isValid = true;
      const newFieldErrors = { email: "", username: "", password: "" };

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
    <div className="main-container">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="exampleFormControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
            value={data.email}
          />
          {fieldErrors.email && (
            <Alert className="alert" variant="danger">
              {fieldErrors.email}
            </Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleFormControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            placeholder="password"
            onChange={handleChange}
          />
          {fieldErrors.password && (
            <Alert className="alert" variant="danger">
              {fieldErrors.password}
            </Alert>
          )}
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>

        {showerror && <Alert variant="danger">{errormessage}</Alert>}
      </Form>
    </div>
  );
}
