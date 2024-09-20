import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";
import useGameQueryStore from "../store";

const GenresList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenresListSkeleton />;

  return (
    <>
      <List>
        {data?.results.map((g: Genre) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImg(g.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                variant="link"
                onClick={() => setSelectedGenreId(g.id)}
                fontWeight={g.id === selectedGenreId ? "bold" : "normal"}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
