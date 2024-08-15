import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface gameType {
  id: number;
  name: string;
}

interface gameResType {
  count: number;
  results: gameType[];
}

const GameGrid = () => {
  const [game, setGame] = useState<gameType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<gameResType>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
