import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../footer/Footer";
import usePost from "../../hooks/usePost";

function Signup({ setisValid }) {
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
    await signup(
      formData.firstName,
      formData.lastName,
      formData.address,
      formData.email,
      formData.username,
      formData.password
    );
  };

  // Effect to handle navigation after successful signup
  useEffect(() => {
    if (data && data.status === 200) {
      localStorage.setItem("token", data.data.token);
      setisValid(true);
      navigate("/login"); // Redirect to login page after successful signup
    }
  }, [data, error, navigate, setisValid]);

  return (
    <div>
      <Navbar />
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h2>Welcome</h2>
            {/* Change text on the button */}
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Already have an account? Login
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={registerUser}>
              <h2>Register for Auction</h2>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                className={styles.input}
              />
              <input
              type="email"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              required
              className={styles.input}
            />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
                className={styles.input}
              />
              {/* Change input type to textarea for address */}
              <textarea
                placeholder="Address"
                name="address"
                onChange={handleChange}
                value={formData.address}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                <h4>Submit</h4>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
