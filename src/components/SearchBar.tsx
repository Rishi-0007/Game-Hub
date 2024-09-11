import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          borderRadius={20}
          variant={"filled"}
          placeholder="Search Games..."
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
