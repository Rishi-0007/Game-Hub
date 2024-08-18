import useData from "./useData"

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {

    const {data} = useData<Platform>('/platforms/lists/parents')

  return {data}
}

export default usePlatforms
