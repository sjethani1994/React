import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";
import { swalError, swalSuccess } from "../utils/Swal";
import { decryptData } from "../utils/cryptoUtils";
import { loadStripe } from "@stripe/stripe-js";
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
        Authorization: sessionStorage.getItem("token"),
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
        Authorization: sessionStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(`${API}/product/addProduct`, formData, {
        headers,
      });
      if (response.status === 201) {
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
        Authorization: sessionStorage.getItem("token"),
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

  const updateProfile = async (formData) => {
    try {
      const userData = decryptData(sessionStorage.getItem("userData"));
      const headers = {
        Authorization: sessionStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(
        `${API}/user/updateProfile/${userData.user._id}`,
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

  const getUserHighestBidCount = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const userData = decryptData(sessionStorage.getItem("userData"));
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const headers = {
        Authorization: token,
      };

      const requestData = {
        userId: userData.user._id,
      };

      const response = await axios.post(
        `${API}/product/getUserHighestBidCount`,
        requestData,
        { headers }
      );

      if (response.status === 200) {
        setData(response.data.productCount);
      } else {
        throw new Error("Failed to fetch user's highest bid count");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized: Invalid token");
      } else {
        setError(error.message || "An error occurred while fetching data");
      }
    }
  };

  const placeOrder = async (productIds) => {
    try {
      const headers = {
        Authorization: sessionStorage.getItem("token"),
      };

      const response = await axios.post(
        `${API}/wallet/place-order`,
        { productIds },
        {
          headers,
        }
      );
      if (response.status === 201) {
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

  const placeOrderSession = async (body) => {
    try {
      // Load Stripe
      const stripe = await loadStripe(
        "pk_test_51Oool4SIiKMrNAex7ioOIyx1ahoCol5DJr6SLitld717QDOafCIBEcQZiEFNpXbNloPuoVUYaHPObV1VrlajDpnG000WYrr8jJ"
      );

      // Set request headers
      const headers = {
        "Content-type": "application/json",
      };

      // Ensure body is defined before making Axios request
      if (!body) {
        throw new Error("Request body is missing.");
      }

      // Axios POST request
      const fetchResponse = await axios.post(
        `${API}/wallet/place-order-session`,
        JSON.stringify(body),
        { headers }
      );

      // Redirect to Stripe checkout
      const result = stripe.redirectToCheckout({
        sessionId: fetchResponse.data.id,
      });

      // Check for errors in redirection
      if (result.error) {
        console.error(result.error); // Log error
        // You might want to display an error message to the user here
      } else {
        console.log("Payment success");
        // You may want to provide feedback to the user that the payment was successful
        // Additionally, you can make an API call to a controller to mark the payment success for a particular auction winner
      }
    } catch (error) {
      // Error handling
      if (error.response) {
        if (error.response.status === 400) {
          setError(error.response.data.error);
          swalError("", error.response.data.error);
        } else {
          setError("Server error");
        }
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError("Error occurred");
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
    updateProfile,
    getUserHighestBidCount,
    placeOrder,
    placeOrderSession,
  };
};

export default usePost;
