import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, method = "GET", requestData = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();

    axios({
      method: method,
      url: url,
      data: requestData,
      cancelToken: source.token,
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });

    return () => {
      source.cancel();
    };
  }, [url, method, requestData]);

  return { data, loading, error };
}

export default useFetch;
