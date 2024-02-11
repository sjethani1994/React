import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";

const useFetch = () => {
  const [getData, setGetData] = useState(null);
  const [error, setError] = useState(null);
  const getAllProducts = async () => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token")
      };

      const response = await axios.get(`${API}/product/getAllProducts`, { headers });

      if (response.status === 200) {
        setGetData(response.data.products);
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
    getData,
    error,
    getAllProducts
  };
};

export default useFetch;
