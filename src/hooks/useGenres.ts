import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    const { data, isLoading , error} = useData<Genre>('/genres')
    
    return {data, error,isLoading}
}

export default useGenres