import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gamequery = useGameQueryStore((s) => s.gameQuery);

  const { data: genres } = useGenres();

  const genre = genres?.results.find((g) => g.id === gamequery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gamequery.platformId
  );

  const heading = `${platform?.name || ""} 
  ${genre?.name || ""} 
  Games`;

  return <Heading size={"2xl"}>{heading}</Heading>;
};

export default GameHeading;
