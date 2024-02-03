// useApiCall.js
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../connection/connection";

function useApiCallHook() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, method, data) => {
    try {
      let axiosResponse;

      if (method === "post") {
        axiosResponse = await axios.post(`${API}/${url}`, data);
      } else if (method === "get") {
        axiosResponse = await axios.get(`${API}/${url}`, { params: data });
      }

      setResponse(axiosResponse);
    } catch (error) {
      setError(error.response.data);
      console.error("API call failed:", error);
    }
  };

  return { response, error, fetchData };
}

export default useApiCallHook;
