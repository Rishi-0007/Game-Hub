import {
  Grid,
  GridItem,
  HStack,
  Show,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading />
        <HStack spacing={3} marginBottom={5} wrap={"wrap"}>
          <PlatformSelector />
          <SortSelector />
          <Show below="lg">
            <Button leftIcon={<HamburgerIcon />} onClick={onOpen}>
              Genres
            </Button>
          </Show>
        </HStack>
        <GameGrid />
      </GridItem>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>
            <GenresList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Grid>
  );
};

export default HomePage;
