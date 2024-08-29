import { useQuery } from "@tanstack/react-query";
// import useData from "./useData";
import apiClient from "../services/api-client";
import { fetchResType } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["Platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResType<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

  // const { data, error } = useData<Platform>("/platforms/lists/parents");

  // return { data, error };
};

export default usePlatforms;
