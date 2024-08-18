import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
}

const GenresList = ({ onSelectedGenre }: Props) => {
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
            <Button variant="link" onClick={() => onSelectedGenre(g)}>
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
