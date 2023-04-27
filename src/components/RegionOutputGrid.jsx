import { Box, GridItem, Grid, Flex } from "@chakra-ui/react";

const RegionOutputGrid = ({ inputArray }) => {
  const title = inputArray[0].ReportName;

  console.log(title);
  return (
    <div>
      <Flex justify="left" align="center">
        <Box
          border="1px solid black"
          mb="1.6rem"
          bg="black"
          color="white"
          w="90%"
          h="100%"
          pl="1rem"
          py="1rem"
          justifyItems="center"
          fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}
          mx="2rem"
        >
          {title}
        </Box>
      </Flex>

      {inputArray.map((region) => (
        <Grid
          h="4rem"
          templateColumns="repeat(6, 1fr)"
          gap={2}
          key={region.RName}
          w="90%"
          mx="2rem"
        >
          <GridItem
            colSpan={[4, 4, 3, 3]}
            mb={[".25rem", ".25rem", "1rem", "1rem"]}
            bg="blue.900"
            color="white"
            pl="1rem"
            justify="center"
            border="2px solid black"
          >
            <Flex justify="left" align="center" h="100%">
              <Box>{region.RName}</Box>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={[2, 2, 1, 1]}
            mb={[".25rem", ".25rem", "1rem", "1rem"]}
            borderColor="blue.900"
            bg="white"
            border="2px solid"
          >
            <Flex justify="center" align="center" h="100%" w="100%">
              <Box color="blue.900" fontSize="1.2rem" fontWeight="700">
                {region.AverageScore}
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={[6, 6, 2, 2]}
            mb="1rem"
            bg="blue.900"
            color="white"
            border="2px solid black"
            pl="1rem"
          >
            <Flex justify="left" align="center" h="100%">
              <Box>{`${region.NumberOfCountriesReporting}/${region.NumberOfCountriesInR} countries reporting`}</Box>
            </Flex>
          </GridItem>
        </Grid>
      ))}
    </div>
  );
};

export default RegionOutputGrid;
