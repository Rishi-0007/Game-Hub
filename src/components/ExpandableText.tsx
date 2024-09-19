import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  limit: number;
}

const ExpandableText = ({ text, limit }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!text) return null;
  if (text.length <= limit) return <Text>{text}</Text>;

  const summary = isExpanded ? text : text.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          fontWeight={"bold"}
          colorScheme={isExpanded ? "green" : "yellow"}
          size={"xs"}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
