import { Grid, GridItem, Box } from "@chakra-ui/react";

const RegionGrid = ({ regions, clickHandler }) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={0}
      mb="2vh"
      mt="3rem"
      align="center"
      mx="2rem"
    >
      {regions.data?.map((region) => (
        <GridItem colSpan={1} key={region}>
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
            onClick={() => clickHandler(region)}
          >
            {region}
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default RegionGrid;
