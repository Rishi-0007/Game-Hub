import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface gameQuery {
  genreId?: number;
  platformId?: number;
  selectedSort: string;
  searchText: string;
}

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        // for screens larger than 1024px
        lg: `"nav nav" "aside main "`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>{" "}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main" padding={3}>
        <GameHeading />
        <HStack paddingY={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
