import { useEffect, useState, useCallback } from "react";
import fetch from "apis/utils/fetch";

function useRequest({ deps = [], skip = false, options }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);

      try {
        const { data: fetchedData } = await fetch({ ...options, ...args });
        setData(() => fetchedData);
        return { data: fetchedData };
      } catch (err) {
        setError(() => err);
        return { error: err };
      } finally {
        setIsLoading(false);
      }
    },
    [options?.url, options?.method, options?.data]
  );

  useEffect(() => {
    if (skip) return;
    refetch();
  }, deps);

  return { data, isLoading, error, fetch: refetch };
}

export default useRequest;
