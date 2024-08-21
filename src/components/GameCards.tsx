import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { gameType } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/getCroppedImg";

interface Props {
  games: gameType;
}

const GameCards = ({ games }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImg(games.background_image)} alt={games.name} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIcons
            platforms={games.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={games.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{games.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
