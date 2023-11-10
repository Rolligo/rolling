import { useEffect, useState, useCallback } from "react";
import fetch from "apis/utils/fetch";

function useRequest({ deps = [], skip = false, ...options }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await fetch({ ...options, ...args });
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }

      return { data, error };
    },
    [options?.url, options?.method]
  );

  useEffect(() => {
    if (skip) return;
    refetch();
  }, deps);

  return { data, isLoading, error, refetch };
}
