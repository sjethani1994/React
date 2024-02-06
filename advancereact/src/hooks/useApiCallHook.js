// useApiCall.js
import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";

function useApiCallHook() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, method, data, customHeaders) => {
    try {
      let axiosResponse;
      const headers = {
        Authorization: customHeaders?.Authorization || "",
        ...customHeaders,
      };

      if (method === "post") {
        axiosResponse = await axios.post(`${API}/${url}`, data, { headers });
      } else if (method === "get") {
        axiosResponse = await axios.get(`${API}/${url}`, {
          params: data,
          headers,
        });
      }
      setResponse(axiosResponse);
    } catch (error) {
      setError(error.response.data);
      console.error("API call failed:", error);
    }
  };

  if (response) {
    return { response, error, fetchData };
  } else {
    return null;
  }
}

export default useApiCallHook;
