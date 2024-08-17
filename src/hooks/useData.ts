import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface fetchResType <T>{ 
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      const controller = new AbortController()
  
        apiClient.get<fetchResType<T>>(endpoint, { signal: controller.signal }).then(res => {
        setData(res.data.results); 
        setLoading(false);
        }).catch(err => {
          if (err instanceof CanceledError) return;  //if error msg is type of cancel error then simply return
          setError(err);
          setLoading(false);
        });
      
      return () => controller.abort();
    }, []);
  
    return { data, error, isLoading };
}

export default useData