import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenresList = ({
  onSelectedGenre,
  selectedGenreId: selectedGenre,
}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenresListSkeleton />;

  return (
    <>
      <Heading size={"lg"} color={"gray.400"}>
        Genres
      </Heading>
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
                onClick={() => onSelectedGenre(g)}
                fontWeight={g.id === selectedGenre ? "bold" : "normal"}
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
