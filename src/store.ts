import { create } from "zustand";

interface gameQuery {
  genreId?: number;
  platformId?: number;
  selectedSort?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: gameQuery;
  setGenreId: (grenreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, selectedSort: sortOrder },
    })),
}));

export default useGameQueryStore;
