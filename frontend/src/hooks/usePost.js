import { useCallback } from "react";
import axios from "axios";
import { useGlobalState } from "../context/GlobalStateContext"; // Import the global state context

export default function usePost(url) {
  const { setError, setData, setIsLoading } = useGlobalState(); // Access global state functions

  const makeRequest = useCallback(
    async (requestData) => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Reset error state
      try {
        const response = await axios.post(url, requestData);
        setData(response);
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setError("No response received from the server");
        } else {
          setError("An error occurred while processing the request");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [url, setError, setData, setIsLoading]
  );

  return { makeRequest };
}
