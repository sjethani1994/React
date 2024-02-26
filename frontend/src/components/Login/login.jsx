import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost"; // Import the usePost hook
import { encryptData } from "../../utils/cryptoUtils";
import "./Login.css";

export default function Login({ setisValid }) {
  // State to manage form data
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Destructuring values returned by usePost hook
  const { data, error, login } = usePost();

  // Hook provided by react-router-dom for navigation
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(formData.email, formData.password);
  };

  // Effect to handle navigation after successful login
  useEffect(() => {
    if (data && data.status === 200) {
      const encryptedData = encryptData(data.data);
      sessionStorage.setItem("userData", encryptedData);
      sessionStorage.setItem("token", data.data.token);
      setisValid(true);
      navigate("/");
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
            <div className="login_login-form">
              <div className="login_title">Login</div>
              <form onSubmit={handleSubmit}>
                <div className="login_input-boxes">
                  <div className="login_input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </div>
                  <div className="login_input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                      required
                    />
                  </div>
                  <div className="login_text">
                    <a href="#top">Forgot password?</a>
                  </div>
                  <div className="login_button login_input-box">
                    <input
                      type="submit"
                      value="Submit"
                    />
                  </div>
                  <div className="login_text login_sign-up-text">
                    Don't have an account?{" "}
                    <Link to="/signup">
                      <label htmlFor="login_flip">Signup now</label>
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
