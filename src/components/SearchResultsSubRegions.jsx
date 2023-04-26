import { useQuery } from "@tanstack/react-query";
// import { useState } from "react"
import { Grid, GridItem, Box } from "@chakra-ui/react";

const getSubRegions = async (ParentRegion) => {
  const region = ParentRegion;

  const url =
    "https://countries-api-7dz0.onrender.com/api/v1/countries/subregions/" +
    region;
  const res = await fetch(url);
  return res.json();
};



const SearchResultsSubRegions = ({
  region,
  showSubRegionsHandler,
  prepareCountriesFilter,
}) => {
  const handleClick = (subregion) => {
    showSubRegionsHandler;
    prepareCountriesFilter({ SubRegion: { subregion } });
  };

  const subRegions = useQuery({
    queryKey: ["subregions", region],
    queryFn: () => getSubRegions(region),
  });

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={0}
      mb="2vh"
      mt="3rem"
      align="center"
    >
      {subRegions.data?.map((subregion) => (
        <GridItem colSpan={[3, 3, 1, 1]} key={subregion}>
          <Box
            as="button"
            w="80%"
            border="2px solid"
            borderColor="blue.900"
            borderRadius="5px"
            my="1rem"
            py=".5rem"
            bg="blue.900"
            color="white"
            fontSize="xl"
            onClick={() => handleClick(subregion)}
          >
            {subregion}
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SearchResultsSubRegions;
