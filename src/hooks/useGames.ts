import { gameQuery } from "../App";
import useData from "./useData";


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


const useGames = (gameQuery: gameQuery) => {  
  // here, we are using the useData hook to fetch the games data based on the selected genre(Query parameter)
  const { data, error, isLoading } = useData<gameType>('/games',
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery])
  
  return {data,error,isLoading}
}

export default useGames;