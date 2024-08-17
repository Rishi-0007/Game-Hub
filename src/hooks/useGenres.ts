import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
}

interface genreResType {
    count: number,
    results: Genre[],
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      const controller = new AbortController()
  
        apiClient.get<genreResType>('/genres', { signal: controller.signal }).then(res => {
        setGenres(res.data.results); 
        setLoading(false);
        }).catch(err => {
          if (err instanceof CanceledError) return;  //if error msg is type of cancel error then simply return
          setError(err);
          setLoading(false);
        });
      
      return () => controller.abort();
    }, []);
  
    return { genres, error, isLoading };
}

export default useGenres