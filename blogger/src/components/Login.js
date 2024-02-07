import React, { useState } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../connection/connection";

const Login = () => {
  const navigate = useNavigate();

  // State variables for form values and error message
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Function to handle form input change
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  async function handleSubmit() {
    try {
      // Check if any field is empty
      const isEmpty = Object.values(formValue).some((value) => value === "");
      if (isEmpty) {
        setError("Please fill out all fields.");
        return;
      }

      // Post form data to the server
      const response = await axios.post(`${API}/auth/login`, formValue);
      // If successful response, navigate to home page
      if (response.status === 200) {
        navigate("/home");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      // If there's an error, set error message
      setError(error.response.data.message);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          {/* Image column */}
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Login Background"
            />
          </MDBCol>

          {/* Form column */}
          <MDBCol col="4" md="6">
            {/* Social media buttons */}
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon
                  fab
                  icon="facebook-f"
                  style={{ color: "white", fontSize: "15px" }}
                />
              </MDBBtn>
              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon
                  fab
                  icon="twitter"
                  style={{ color: "white", fontSize: "15px" }}
                />
              </MDBBtn>
              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon
                  fab
                  icon="linkedin-in"
                  style={{ color: "white", fontSize: "15px" }}
                />
              </MDBBtn>
            </div>

            {/* Divider */}
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            {/* Login form */}
            <MDBValidation className="row g-3">
              <MDBValidationItem
                className="col-md-12"
                feedback="Please provide a valid UserName."
                invalid
              >
                <MDBInput
                  value={formValue.username}
                  name="username"
                  onChange={onChange}
                  id="username"
                  required
                  label="username"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-12"
                feedback="Please provide a valid password."
                invalid
              >
                <MDBInput
                  value={formValue.password}
                  name="password"
                  onChange={onChange}
                  id="validationCustom03"
                  required
                  label="Password"
                />
              </MDBValidationItem>
              {/* Display error message */}
              {error && <div className="text-danger">{error}</div>}
              {/* Forgot password link */}
              <div className="d-flex justify-content-between mb-4">
                <a href="!#">Forgot password?</a>
              </div>

              {/* Login button and Register link */}
              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg" onClick={handleSubmit}>
                  Login
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{" "}
                  <Link to={"/register"} className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </MDBValidation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
