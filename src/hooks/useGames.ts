import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { fetchResType } from "../services/api-client";
import useGameQueryStore from "../store";
import { gameType } from "../entities/gameType";

const apiClient = new APIClient<gameType>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<fetchResType<gameType>, Error>({
    queryKey: ["Games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.selectedSort,
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
