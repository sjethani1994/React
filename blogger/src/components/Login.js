import React, { useState } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Login = () => {
  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Login Background"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
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

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBValidation className="row g-3">
              <MDBValidationItem
                className="col-md-12"
                feedback="Please provide a valid UserName."
                invalid
              >
                <MDBInput
                  value={formValue.userName}
                  name="userName"
                  onChange={onChange}
                  id="userName"
                  required
                  label="Username"
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
              <div className="d-flex justify-content-between mb-4">
                <a href="!#">Forgot password?</a>
              </div>

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg" type="submit">
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
