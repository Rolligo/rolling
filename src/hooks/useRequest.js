import { useEffect, useState } from "react";
import fetch from "apis/utils/fetch";

function useRequest({ deps = [], skip = false, ...options }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: fetchedData, status: fetchedStatus } = await fetch({
        ...options,
        ...args,
      });
      setData(fetchedData);
      setStatus(fetchedStatus);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (skip) return;
    refetch();
  }, deps);

  return { data, status, isLoading, error, refetch };
}

export default useRequest;
