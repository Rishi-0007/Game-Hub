import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import useTrailers from "../hooks/useTrailers";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Trailer } from "../entities/Trailer";

interface Props {
  gameId: number;
}

const TrailerCarousel = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quality, setQuality] = useState<"480" | "max">("480");

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading trailers</Text>;
  if (!data || !data.results || data.results.length === 0)
    return <Text>No trailers available</Text>;

  const trailers: Trailer[] = data.results;
  const currentTrailer = trailers[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : trailers.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < trailers.length - 1 ? prevIndex + 1 : 0
    );
  };

  const toggleQuality = () => {
    setQuality((prevQuality) => (prevQuality === "480" ? "max" : "480"));
  };

  return (
    <Box bg={bgColor} p={4} borderRadius="md" maxWidth="800px" margin="auto">
      <Heading as="h2" size="lg" mb={4} color={textColor}>
        {currentTrailer.name}
      </Heading>
      <Box position="relative" mb={4}>
        <video
          src={currentTrailer.data[quality]}
          poster={currentTrailer.preview}
          controls
          width="100%"
          height="auto"
        />
        <Button
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          onClick={handlePrev}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          onClick={handleNext}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Text color={textColor}>
          Trailer {currentIndex + 1} of {trailers.length}
        </Text>
        <Button onClick={toggleQuality}>
          Quality: {quality === "480" ? "480p" : "Max"}
        </Button>
      </Flex>
      <Flex mt={4} overflowX="auto" pb={2}>
        {trailers.map((trailer, index) => (
          <Image
            key={trailer.id}
            src={trailer.preview}
            alt={trailer.name}
            boxSize="100px"
            objectFit="cover"
            mr={2}
            cursor="pointer"
            opacity={index === currentIndex ? 1 : 0.6}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TrailerCarousel;
