import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant={"filled"}
        placeholder="Search Games..."
      />
    </InputGroup>
  );
};

export default SearchBar;
