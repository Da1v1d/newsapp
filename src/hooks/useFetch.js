import { useEffect, useState } from "react";

import { controller } from "api/controller";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    // ? Abortsignal is aborted without reason
    // return () => controller.abort();
  }, []);

  const fetchData = async fetch => {
    try {
      setLoading(true);
      const data = await fetch();
      setError(null);
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, fetchData, error, loading, setData };
};
