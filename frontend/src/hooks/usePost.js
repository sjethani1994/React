import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";
import { swalError, swalSuccess } from "../utils/Swal";

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

  const subscribe = async (email) => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.post(
        `${API}/user/newsLetter`,
        {
          email,
        },
        { headers }
      );

      if (response.status === 200) {
        // Assuming successful subscription returns a success message
        setData(response.data.message); // Set data if subscription is successful
        swalSuccess("", response.data.message);
      } else {
        // Handle unexpected response status
        setError("Unexpected response status");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status code
        if (error.response.status === 400) {
          setError(error.response.data.error); // Bad request, email format is invalid
          swalError("", error.response.data.error);
        } else {
          setError("Server error"); // Other server errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server"); // Network error
      } else {
        // Something happened in setting up the request that triggered an error
        setError("Error occurred"); // Generic error
      }
    }
  };

  const addProduct = async (formData) => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      };
    

      const response = await axios.post(
        `${API}/product/addProduct`,
        formData,
        { headers }
      );

      if (response.status === 200) {
        // Assuming successful subscription returns a success message
        setData(response.data.message); // Set data if subscription is successful
        swalSuccess("", response.data.message);
      } else {
        // Handle unexpected response status
        setError("Unexpected response status");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status code
        if (error.response.status === 400) {
          setError(error.response.data.error); // Bad request, email format is invalid
          swalError("", error.response.data.error);
        } else {
          setError("Server error"); // Other server errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server"); // Network error
      } else {
        // Something happened in setting up the request that triggered an error
        setError("Error occurred"); // Generic error
      }
    }
  };

  const placeBid = async (productId, amount) => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.post(
        `${API}/product/placeBid/${productId}`,
        {
          amount,
        },
        { headers }
      );

      if (response.status === 200) {
        setData(response.data.message);
        swalSuccess("", response.data.message);
      } else {
        // Handle unexpected response status
        setError("Unexpected response status");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status code
        if (error.response.status === 400) {
          setError(error.response.data.error); // Bad request, email format is invalid
          swalError("", error.response.data.error);
        } else {
          setError("Server error"); // Other server errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server"); // Network error
      } else {
        // Something happened in setting up the request that triggered an error
        setError("Error occurred"); // Generic error
      }
    }
  };
  // Return data, error, login and signup functions
  return {
    data,
    error,
    login,
    signup,
    subscribe,
    placeBid,
    addProduct,
  };
};

export default usePost;
