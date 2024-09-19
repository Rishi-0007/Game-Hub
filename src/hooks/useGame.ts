import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { gameType } from "./useGames";

const apiClient = new APIClient<gameType>("/games");

const useGame = (slug: string | undefined) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => {
      if (slug === undefined) {
        throw new Error("Slug is undefined");
      }
      return apiClient.getOne(slug, {});
    },
    enabled: !!slug, // This ensures the query only runs if slug is defined
  });

export default useGame;
