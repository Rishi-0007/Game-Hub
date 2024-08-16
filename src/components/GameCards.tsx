import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { gameType } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

interface Props {
  games: gameType;
}

const GameCards = ({ games }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={games.background_image} alt={games.name} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <PlatformIcons
          platforms={games.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCards;
