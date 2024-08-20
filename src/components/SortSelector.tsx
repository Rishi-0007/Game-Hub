import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Text>Sort</Text>
      </MenuButton>
      <MenuList>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Rating</MenuItem>
        <MenuItem>Price</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
