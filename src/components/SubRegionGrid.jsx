import { Box, GridItem, Grid, Text, Flex } from "@chakra-ui/react";

const SubRegionGrid = ({ inputArray }) => {
  const title = inputArray[0].ReportName;

  console.log(title);
  return (
    <div>
      <Flex justify="left" align="center">
        <Box
          border="1px solid black"
          mb="1rem"
          bg="black"
          color="white"
          w="100%"
          h="100%"
          pl="1rem"
          py="1rem"
          justifyItems="center"
          fontSize="1.5rem"
        >
          {title}
        </Box>
      </Flex>

      {inputArray.map((SREntry) => (
        <Grid
          h="4rem"
          templateColumns="repeat(6, 1fr)"
          gap={2}
          key={SREntry.SRName}
        >
          <GridItem
            colSpan={3}
            mb="1rem"
            bg="blue.900"
            color="white"
            pl="1rem"
            justify="center"
            border="2px solid black"
          >
            <Flex justify="left" align="center" h="100%">
              <Box>{SREntry.SRName}</Box>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={1}
            mb="1rem"
            borderColor="blue.900"
            bg="white"
            border="2px solid"
          >
            <Flex justify="center" align="center" h="100%" w="100%">
              <Box color="blue.800" fontSize="1.2rem" fontWeight="700">
                {SREntry.AverageScore}
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={2}
            mb="1rem"
            bg="blue.900"
            color="white"
            border="2px solid black"
            pl="1rem"
          >
            <Flex justify="left" align="center" h="100%">
              <Box>{`${SREntry.NumberOfCountriesReporting}/${SREntry.NumberOfCountriesInSR} countries reporting`}</Box>
            </Flex>
          </GridItem>
        </Grid>
      ))}
    </div>
  );
};

export default SubRegionGrid;
