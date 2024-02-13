import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";

const usePost = () => {
  const [data, setData] = useState(null); // State to hold response data
  const [error, setError] = useState(null); // State to hold error messages

  // Function to handle user login
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API}/user/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setData(response); // Set data if login is successful
      } else {
        setError("Invalid email or password"); // Set error message for unsuccessful login
      }
    } catch (error) {
      if (error.response) {
        if (error.response && error.response.status === 401) {
          setError("Invalid email or password"); // Unauthorized error
        } else {
          setError(error.response.data.message); // Other errors
        }
      } else {
        setError(error.message); // Network error
      }
    }
  };

  // Function to handle user signup
  const signup = async ({
    firstName,
    lastName,
    email,
    username,
    password,
    address,
  }) => {
    try {
      const response = await axios.post(`${API}/user/register`, {
        firstName,
        lastName,
        username,
        email,
        password,
        address,
      });

      if (response.status === 201) {
        setData(response); // Set data if signup is successful
      } else {
        setError("Invalid email or password"); // Set error message for unsuccessful signup
      }
    } catch (error) {
      if (error.response) {
        if (error.response && error.response.status === 401) {
          setError("Invalid email or password"); // Unauthorized error
        } else {
          setError(error.response.data.message); // Other errors
        }
      } else {
        setError(error.message); // Network error
      }
    }
  };

  // Return data, error, login and signup functions
  return {
    data,
    error,
    login,
    signup,
  };
};

export default usePost;
