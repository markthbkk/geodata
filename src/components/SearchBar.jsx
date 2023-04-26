import {
  Input,
  InputLeftElement,
  InputGroup,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaUndo } from "react-icons/fa";

const SearchBar = ({
  disableSearchBar,
  resetScreen,
  prepareCountriesFilter,
}) => {
  const [value, setValue] = useState("");

  let timeout;

  const handleChange = (event) => {
    setValue(event.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      prepareCountriesFilter({ PartialName: event.target.value });
    }, 1000);
    };
    
    const handleReset = () => {

        resetScreen();
        setValue("")
    }

  return (
    <Flex justify="space-around">
      <InputGroup w="75%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="blue.900" pt="0" />}
        />
        <Input
          colorScheme="blue"
          focusBorderColor="blue.900"
          value={value}
          onChange={handleChange}
          placeholder="   Search by country name..."
          size="md"
          w="2xl"
                  isDisabled={disableSearchBar ? true : ""}
        />
      </InputGroup>
      <Box
        as="button"
        size="lg"
        color="blue.900"
        fontSize="3xl"
        py="2"
        onClick={handleReset}
      >
        <FaUndo />
      </Box>
    </Flex>
  );
};

export default SearchBar;
