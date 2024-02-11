import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";

const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API}/user/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setData(response);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password"); // Unauthorized error
      } else {
        setError(error.response.data.message); // Other errors
      }
    }
  };

  const signup = async (firstName, lastName, email, username, password, address) => {
    try {
      const response = await axios.post(`${API}/user/register`, {
        firstName,
        lastName,
        email,
        username,
        password,
        address,
      });

      if (response.status === 201) {
        setData(response);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password"); // Unauthorized error
      } else {
        setError(error.response.data.message); // Other errors
      }
    }
  };

  return {
    data,
    error,
    login,
    signup,
  };
};

export default usePost;
