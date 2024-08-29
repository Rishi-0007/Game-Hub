import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";

import apiClient, { fetchResType } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface gameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: gameQuery) => {
  return useQuery<fetchResType<gameType>, Error>({
    queryKey: ["Games", gameQuery],
    queryFn: () =>
      apiClient
        .get<fetchResType<gameType>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.selecteddSort,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

  // // here, we are using the useData hook to fetch the games data based on the selected genre(Query parameter)
  // const { data, error, isLoading } = useData<gameType>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.selecteddSort,
  //       search: gameQuery.searchText,
  //     },
  //   },
  //   [gameQuery]
  // );

  // return { data, error, isLoading };
};

export default useGames;
