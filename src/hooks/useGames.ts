import { AxiosError, CanceledError } from "axios";
import {  useEffect, useState } from "react";
import gamesService from "../services/games-service";

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
    const { request, cancel } = gamesService.getAll<gameResType>();
    
    request.then(res => {
      setGames(res.data.results); 
      setLoading(false);
    }).catch(err => {if (err instanceof CanceledError)
      setError(err);
      setLoading(false)
    });

    return () => cancel();
  }, []);

  return { games, error, isLoading };
}

export default useGames;