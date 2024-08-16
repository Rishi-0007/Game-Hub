import { AxiosError } from "axios";
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
  parent_platforms: {platform: Platform}[];
}

interface gameResType {
  count: number;
  results: gameType[];
}

const useGames = () => {
  const [games, setGames] = useState<gameType[]>([]);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const { request, cancel } = gamesService.getAll<gameResType>();
    
    request.then(res => setGames(res.data.results)).catch(err => setError(err));

    return () => cancel();
  }, []);

  return { games, error };
}

export default useGames;