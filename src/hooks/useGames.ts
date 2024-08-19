import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {  
  // here, we are using the useData hook to fetch the games data based on the selected genre(Query parameter)
  const { data, error, isLoading } = useData<gameType>('/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id])
  
  return {data,error,isLoading}
}

export default useGames;