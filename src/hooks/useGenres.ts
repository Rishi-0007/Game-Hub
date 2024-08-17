import useData from "./useData";

interface Genre {
    id: number;
    name: string;
}

const useGenres = () => {
    const { data } = useData<Genre>('/genres')
    
    return {data}
}

export default useGenres