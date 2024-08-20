import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSortSelected: (sort: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSortSelected, selectedSort }: SortSelectorProps) => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
  ];
  // find current sort object
  const currentSort = sortOptions.find(
    (option) => option.value === selectedSort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Text>Sort by: {currentSort?.label || "Relevance "}</Text>
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onSortSelected(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
