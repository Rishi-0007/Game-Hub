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


const useGames = () => {  
  const { data,error,isLoading } = useData<gameType>('/games')
  
  return {data,error,isLoading}
}

export default useGames;