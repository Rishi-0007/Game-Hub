import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";

import APIClient, { fetchResType } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<gameType>("/games");

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
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.selecteddSort,
          search: gameQuery.searchText,
        },
      }),
  });
};

export default useGames;
