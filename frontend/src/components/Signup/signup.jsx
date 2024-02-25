import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
import "../Login/Login.css";
export default function Signup({ setisValid }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    address: "",
  });

  // Destructuring values returned by usePost hook
  const { data, error, signup } = usePost();

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  // Function to handle form submission
  const registerUser = async (event) => {
    event.preventDefault();
    await signup({
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      address: formData.address,
    });
  };

  // Effect to handle navigation after successful signup
  useEffect(() => {
    if (data && data.status === 200) {
      sessionStorage.setItem("token", data.data.token);
      setisValid(true);
      navigate("/login"); // Redirect to login page after successful signup
    }
  }, [data, error, navigate, setisValid]);
  return (
    <div className="login_body">
      <div className="login_container">
        <input type="checkbox" id="login_flip" />
        <div className="login_cover">
          <div className="login_front">
            <img
              src="https://www.loginradius.com/blog/static/80ca6be823802f80e0327a0abf8a09a9/d3746/username-pswrd.jpg"
              alt=""
            />
            <div className="login_text">
              <span className="login_text-1">
                Welcome to E-Auction <br /> Enter Details
              </span>
              <span className="login_text-2">Here</span>
            </div>
          </div>
          <div className="login_back">
            <img
              className="login_backImg"
              src="https://images.pexels.com/photos/7103164/pexels-photo-7103164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="login_text">
              <span className="login_text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="login_text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="login_forms">
          <div className="login_form-content">
            <div className="login_signup-form">
              <div className="login_title">Signup</div>
              <form onSubmit={registerUser}>
                <div className="login_input-boxes">
                  <div className="login_input-box">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      required
                    />
                  </div>
                  <div className="login_input-box">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      value={formData.lastName}
                      required
                    />
                  </div>
                  <div className="login_input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </div>
                  <div className="login_input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      value={formData.username}
                      required
                    />
                  </div>
                  <div className="login_input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                      required
                    />
                  </div>
                  <div className="login_textarea-box">
                    <i className="fas fa-address-card"></i>
                    <textarea
                      placeholder="Address"
                      name="address"
                      onChange={handleChange}
                      value={formData.address}
                      required
                    />
                  </div>

                  <div className="login_button login_input-box">
                    <input
                      type="submit"
                      value="Submit"
                    />
                  </div>
                  <div className="login_text login_sign-up-text">
                    Already have an account?{" "}
                    <Link to="/">
                      <label htmlFor="login_flip">Login now</label>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
