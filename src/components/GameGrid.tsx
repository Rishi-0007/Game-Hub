import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error.message}</Text>}
      {
        <ul>
          {games.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      }
    </>
  );
};

export default GameGrid;
