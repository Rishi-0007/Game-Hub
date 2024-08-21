import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";

interface Props {
  gamequery: gameQuery;
}

const GameHeading = ({ gamequery }: Props) => {
  // Games
  // Xbox Games
  // Action Xbox Games

  const heading = `${gamequery.platform?.name || ""} 
  ${gamequery.genre?.name || ""} 
  Games`;

  return <Heading size={"2xl"}>{heading}</Heading>;
};

export default GameHeading;
