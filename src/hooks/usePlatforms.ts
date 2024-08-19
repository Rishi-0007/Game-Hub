import useData from "./useData"

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {

    const {data, error} = useData<Platform>('/platforms/lists/parents')

  return {data, error}
}

export default usePlatforms
