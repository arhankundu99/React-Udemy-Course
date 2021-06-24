import { useState, useCallback } from "react";

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async(requestConfig, applyData) => {
        
        setIsLoading(true);
        setError(null);
        const url = requestConfig.url;
        try{
            const response = await fetch(url, {
                body: requestConfig.body === undefined? null: requestConfig.body,
                method: requestConfig.method === undefined? 'GET': requestConfig.method,
                headers: requestConfig.headers === undefined? {}: requestConfig.headers
            });
              
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        }
        catch(error){
            console.log(error);
            setError(error.message || 'Something went wrong');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    };
}
export default useHttp;