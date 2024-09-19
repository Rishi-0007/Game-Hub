import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/getCroppedImg";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";
import { gameType } from "../entities/gameType";

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
        <Link to={`/games/${games.slug}`}>
          <Heading fontSize="2xl">{games.name}</Heading>
        </Link>
        <Emojis rating={games.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCards;
