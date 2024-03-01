import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";
import { decryptData } from "../utils/cryptoUtils";

const useFetch = () => {
  const [getData, setGetData] = useState(null);
  const [getError, setError] = useState(null);
  const getAllProducts = async () => {
    try {
      const headers = {
        Authorization: sessionStorage.getItem("token"),
      };

      const response = await axios.get(`${API}/product/getAllProducts`, {
        headers,
      });
      if (response.status === 200) {
        setGetData(response.data.products);
        // Filter out inactive products before storing them in localStorage
        const activeProducts = response.data.products.filter(
          (product) => product.isActive
        );
        localStorage.setItem("biddersData", JSON.stringify(activeProducts));
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password"); // Unauthorized error
      } else {
        setError(error?.response?.data?.message); // Other errors
      }
    }
  };

  const getProductById = async (_id) => {
    try {
      const headers = {
        Authorization: sessionStorage.getItem("token"),
      };
      const response = await axios.get(`${API}/product/getProductById/${_id}`, {
        headers,
      });

      if (response.status === 200) {
        return { success: true, data: response, getError: null };
      } else {
        return {
          success: false,
          data: null,
          error: `Product with id ${_id} not found`,
        };
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return { success: false, data: null, getError: "Unauthorized access" };
      } else {
        return {
          success: false,
          data: null,
          error: error.response
            ? error?.response?.data?.message
            : "An error occurred. Please try again later.",
        };
      }
    }
  };

  const getCartProducts = async () => {
    try {
      const headers = {
        Authorization: sessionStorage.getItem("token"),
      };
      const userData = decryptData(sessionStorage.getItem("userData"));
      const response = await axios.get(
        `${API}/product/getCartProducts/${userData.user._id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        setGetData(response);
        return { success: true, data: response, getError: null };
      } else {
        return {
          success: false,
          data: null,
          error: `Product with id ${userData.user._id} not found`,
        };
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return { success: false, data: null, getError: "Unauthorized access" };
      } else {
        return {
          success: false,
          data: null,
          error: error.response
            ? error?.response?.data?.message
            : "An error occurred. Please try again later.",
        };
      }
    }
  };

  const getProfileData = async () => {
    try {
      const userData = decryptData(sessionStorage.getItem("userData"));
      const headers = {
        Authorization: sessionStorage.getItem("token"),
      };
      const response = await axios.get(
        `${API}/user/getProfile/${userData.user._id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        setGetData(response);
        return { success: true, data: response, getError: null };
      } else {
        return {
          success: false,
          data: null,
          error: `Product with id ${userData.user._id} not found`,
        };
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return { success: false, data: null, getError: "Unauthorized access" };
      } else {
        return {
          success: false,
          data: null,
          error: error.response
            ? error?.response?.data?.message
            : "An error occurred. Please try again later.",
        };
      }
    }
  };

  return {
    getData,
    getError,
    getAllProducts,
    getProductById,
    getProfileData,
    getCartProducts,
  };
};

export default useFetch;
