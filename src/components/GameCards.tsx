import { Card, Heading, Image } from "@chakra-ui/react";
import { gameType } from "../hooks/useGames";

interface Props {
  games: gameType;
}

const GameCards = ({ games }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={games.background_image} alt={games.name} />
      <Heading fontSize="2xl">{games.name}</Heading>
    </Card>
  );
};

export default GameCards;
