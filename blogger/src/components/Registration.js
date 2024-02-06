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
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  async function handleSubmit() {
    try {
      console.log(formValue)
      const isEmpty = Object.values(formValue).some((value) => value === "");
      console.log(isEmpty)
      if (isEmpty) return;

      console.log(formValue)
      const response = await axios.post(`${API}/auth/signup`, formValue);
      if (response.status === 201) {
        navigate("/home");
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
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
