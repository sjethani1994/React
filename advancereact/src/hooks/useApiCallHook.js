import { useState } from "react";
import axios from "axios";
import API from "../connection/connection";

function useApiCallHook() {
  // State for response and error
  const [responseData, setResponseData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  // Function to fetch data from API
  const fetchData = (url, method, requestData, customHeaders) => {
    try {
      // Prepare headers for the request
      const headers = {
        Authorization: customHeaders?.Authorization || "",
        ...customHeaders,
      };

      // Make the API request based on the method (POST or GET)
      if (method === "post") {
        // Make a POST request
        axios
          .post(`${API}/${url}`, requestData, { headers })
          .then((response) => {
            // Set response data and clear error if request was successful
            setResponseData(response);
            setFetchError(null);
          })
          .catch((error) => {
            // Set error if there's an error with the request
            setFetchError(error);
          });
      } else if (method === "get") {
        // Make a GET request
        axios
          .get(`${API}/${url}`, { params: requestData, headers })
          .then((response) => {
            // Set response data and clear error if request was successful
            setResponseData(response.data);
            setFetchError(null);
          })
          .catch((error) => {
            // Clear response and set error if there's an error with the request
            setResponseData(null);
            setFetchError(error);
          });
      }
    } catch (error) {
      // Catch any errors occurred during the API call
      setFetchError(error);
    }
  };

  // Return response data, error, and fetchData function
  return { responseData, fetchError, fetchData };
}

export default useApiCallHook;
