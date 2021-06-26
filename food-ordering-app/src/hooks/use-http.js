import { useState, useCallback } from "react";

const useHttp = () => {
  const [requestError, setRequestError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    const url = requestConfig.url;
    try {
      const response = await fetch(url, {
        method: requestConfig.method ? "POST" : "GET",
        body: requestConfig.body ? requestConfig.body : null,
      });

      if (!response.ok) throw new Error();

      const data = await response.json();
      if (applyData !== undefined) applyData(data);
      setRequestError(false);
    } catch (error) {
      console.log("HTTP ERROR");
      setRequestError(true);
    }
    setIsLoading(false);
  }, []);
  return {
    requestError,
    isLoading,
    sendRequest,
  };
};
export default useHttp;
