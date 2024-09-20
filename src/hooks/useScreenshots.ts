import { useQuery } from "@tanstack/react-query";
import { Screenshots } from "../entities/Screenshots";
import APIClient from "../services/api-client";

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
