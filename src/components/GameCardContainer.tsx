import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius={10}
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
