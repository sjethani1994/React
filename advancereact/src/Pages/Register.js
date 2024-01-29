import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../connection/connection";
import { Form, Button, Alert } from "react-bootstrap";
import "../styles/Register.css";
export default function Register({ setEnableHeader }) {
  const [registerdata, setRegisterData] = useState({
    email: "",
    username: "",
    password: "", // Set an initial value for password
  });
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [showerror, setShowError] = useState(false);
  const [errormessage, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setFieldErrors((prev) => ({ ...prev, [event.target.name]: "" }));
  }

  async function PopulatetoDB() {
    let isValid = true;
    const newFieldErrors = { email: "", username: "", password: "" };

    if (!registerdata.email) {
      isValid = false;
      newFieldErrors.email = "Email is required.";
    }

    if (!registerdata.username) {
      isValid = false;
      newFieldErrors.username = "Username is required.";
    }

    if (!registerdata.password) {
      isValid = false;
      newFieldErrors.password = "Password is required.";
    }

    if (!isValid) {
      setFieldErrors(newFieldErrors);
      return;
    }

    try {
      const response = await axios.post(`${API}/user/register`, registerdata);
      if (response.status === 201) {
        navigate("/home");
        setEnableHeader(true);
      } else {
        setShowError(true);
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      setShowError(true);
      setErrorMsg(error.response.data.message);
    }
  }

  return (
    <div className="main-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleFormControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={registerdata.email}
            placeholder="name@example.com"
            onChange={handleChange}
          />
          {fieldErrors.email && (
            <Alert className="alert" variant="danger">
              {fieldErrors.email}
            </Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleFormControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={registerdata.username}
            placeholder="pegasis1234"
            onChange={handleChange}
          />
          {fieldErrors.username && (
            <Alert className="alert" variant="danger">
              {fieldErrors.username}
            </Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleFormControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={registerdata.password}
            placeholder="password"
            onChange={handleChange}
          />
          {fieldErrors.password && (
            <Alert className="alert" variant="danger">
              {fieldErrors.password}
            </Alert>
          )}
        </Form.Group>

        <Button variant="primary" onClick={PopulatetoDB}>
          Submit
        </Button>

        {showerror && <Alert variant="danger">{errormessage}</Alert>}
      </Form>
    </div>
  );
}
