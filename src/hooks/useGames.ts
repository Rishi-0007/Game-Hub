import { useInfiniteQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery<fetchResType<gameType>, Error>({
    queryKey: ["Games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.selecteddSort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
