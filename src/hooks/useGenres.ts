import { useQuery } from "@tanstack/react-query";
// import useData from "./useData";
// import axios from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  //   const { data, isLoading, error } = useData<Genre>("/genres");

  return useQuery({
    queryKey: ["Genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // for 24h genre will consider as fresh
  });

  //   return { data, error, isLoading };
};

export default useGenres;
