import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Signup/style.module.css";
import usePost from "../../hooks/usePost"; // Import the usePost hook
import { decryptData, encryptData } from "../../utils/cryptoUtils";

const Login = ({ setisValid }) => {
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
      const encryptedData = encryptData(data.data.user._id);
      sessionStorage.setItem("userData", encryptedData);
      localStorage.setItem("token", data.data.token);
      setisValid(true);
      navigate("/");
    }
  }, [data, error, navigate, setisValid]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <div className={styles.form_container}>
            <h1>Login To Validate</h1>
            {/* Input fields for email and password */}
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
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              className={styles.input}
            />

            {/* Display error message if there is an error */}
            {error && <div className={styles.error_msg}>{error}</div>}

            {/* Button to trigger form submission */}
            <button
              type="button" // Change type to "button"
              className={styles.green_btn}
              onClick={handleSubmit} // Call handleSubmit function on button click
            >
              Validate
            </button>
          </div>
        </div>
        <div className={styles.right}>
          {/* Link to navigate to signup page */}
          <h3>New Here?</h3>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
