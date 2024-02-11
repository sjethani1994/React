import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Signup/style.module.css";
import usePost from "../../hooks/usePost"; // Import the usePost hook
import { useGlobalState } from "../../context/GlobalStateContext"; // Import the global state context
import API from "../../connection/connection";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { makeRequest } = usePost(`${API}/user/login`);
  const { isLoading, error, data } = useGlobalState(); // Access global state
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await makeRequest(formData); // Wait for the request to complete
      console.log(data);
      localStorage.setItem("token", data?.data?.token);
      if (data?.status === 200) navigate("/");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login To Validate</h1>
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

            {error && <div className={styles.error_msg}>{error}</div>}
            {data && <div className={styles.success_msg}>Login Successful</div>}
            <button
              type="submit"
              className={styles.green_btn}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Validate"}
            </button>
          </form>
        </div>
        <div className={styles.right}>
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
