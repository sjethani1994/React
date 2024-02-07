import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import API from "../connection/connection";
import axios from "axios";

function Registration() {
  // State variables for form values and error message
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
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
      const response = await axios.post(`${API}/auth/signup`, formValue);
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

  // Hook from React Router DOM for navigation
  const navigate = useNavigate();

  return (
    <MDBContainer fluid className="mt-1 mb-1">
      <MDBRow className="g-0 align-items-center">
        <MDBCol
          col="6"
          md={6}
          sm={12}
          className="order-2 d-flex justify-content-center"
        >
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
              boxShadow: "0 4px 8px rgb(0 0 0 / 23%)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up</h2>
              <MDBValidation className="row g-3">
                <MDBRow>
                  <MDBCol col="6" className="order-1">
                    <MDBValidationItem
                      feedback="Please provide First name."
                      invalid
                    >
                      <MDBInput
                        value={formValue.firstName}
                        name="firstName"
                        onChange={onChange}
                        id="firstName"
                        required
                        label="First Name"
                      />
                    </MDBValidationItem>
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBValidationItem
                      feedback="Please provide Last name."
                      invalid
                    >
                      <MDBInput
                        value={formValue.lastName}
                        name="lastName"
                        onChange={onChange}
                        id="lastName"
                        required
                        label="Last Name"
                      />
                    </MDBValidationItem>
                  </MDBCol>
                </MDBRow>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please provide a valid username."
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
                {error && <div className="text-danger">{error}</div>}
                <MDBBtn className="w-100 mb-4" size="md" onClick={handleSubmit}>
                  sign up
                </MDBBtn>
              </MDBValidation>

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="lg" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col="6" md={6} sm={12}>
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
            fluid
            style={{ height: "930px" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Registration;
