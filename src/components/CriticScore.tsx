import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <div>
      <Badge colorScheme={color} marginX={1}>
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
