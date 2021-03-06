import { useState, useEffect } from "react";

const useFetch = (request, key = "") => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await request;
        const resJson = await res.json();
        setResponse(resJson);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [key]);
  return { response, error };
};

export default useFetch;
