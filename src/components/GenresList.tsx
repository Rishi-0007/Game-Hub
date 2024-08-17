import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenresListSkeleton />;

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
