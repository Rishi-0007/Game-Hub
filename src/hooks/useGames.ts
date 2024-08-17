import { AxiosError, CanceledError } from "axios";
import {  useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface gameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface gameResType {
  count: number;
  results: gameType[];
}

const useGames = () => {
  const [games, setGames] = useState<gameType[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController()

      apiClient.get<gameResType>('/games', { signal: controller.signal }).then(res => {
      setGames(res.data.results); 
      setLoading(false);
      }).catch(err => {
        if (err instanceof CanceledError) return;  //if error msg is type of cancel error then simply return
        setError(err);
        setLoading(false);
      });
    
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;