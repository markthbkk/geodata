import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const getSubRegions = async (ParentRegion) => {
  const region = ParentRegion;

  const url =
    "https://countries-api-7dz0.onrender.com/api/v1/countries/subregions/" +
    region;
  const res = await fetch(url);
  return res.json();
};

const RequestSubregionInRegion = ({ region, clickHandler }) => {
  const subRegions = useQuery({
    queryKey: ["subregions", region],
    queryFn: () => getSubRegions(region),
  });

  console.log({ subRegions });

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
            onClick={() => clickHandler(subregion)}
          >
            {subregion}
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default RequestSubregionInRegion;
