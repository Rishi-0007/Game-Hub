import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gamequery: gameQuery;
}

const GameHeading = ({ gamequery }: Props) => {
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
