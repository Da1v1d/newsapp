import { useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const fetchData = async fetch => {
    try {
      setLoading(true);
      const data = await fetch();
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, fetchData, error, loading };
};
