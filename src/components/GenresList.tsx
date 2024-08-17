import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImg(g.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Text size={"lg"}>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
