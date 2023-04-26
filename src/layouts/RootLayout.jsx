import { Outlet, NavLink } from "react-router-dom";

import { Container, Grid, GridItem, Box, Text, HStack, Flex } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Container maxW="container.xl" bg="white" color="black" p="0">
      <Grid
        // templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={0}
        mb="2vh"
      >
        <GridItem colSpan={4} bg="blue.900" color="white">
          <nav>
            <Flex justifyContent="center">
              <HStack spacing={10} py="1.8rem">
                <Box
                  w="6rem"
                  py="1rem"
                  font="calibri"
                  border=".3rem solid white"
                  margin=".8rem"
                >
                  <Text fontSize="4xl" align="center">
                    G
                  </Text>
                </Box>
                <Box
                  w="6rem"
                  py="1rem"
                  font="calibri"
                  border=".3rem solid white"
                  margin=".8rem"
                >
                  <Text fontSize="4xl" align="center">
                    E
                  </Text>
                </Box>
                <Box
                  w="6rem"
                  py="1rem"
                  font="calibri"
                  border=".3rem solid white"
                  margin=".8rem"
                >
                  <Text fontSize="4xl" align="center">
                    O
                  </Text>
                </Box>
              </HStack>
            </Flex>
          </nav>
        </GridItem>
        <GridItem colSpan={4} bg="blue.900" py="1rem" color="white" borderTop="1px solid white">
          <Flex justifyContent="space-around">
            <NavLink to="/">
              <Text fontSize="2xl" align="center">
                Countries
              </Text>
            </NavLink>
            <NavLink to="/reports">
              <Text fontSize="2xl" align="center">
                Rankings
              </Text>
            </NavLink>
            <NavLink to="/citations">
              <Text fontSize="2xl" align="center">
                Citations
              </Text>
            </NavLink>
          </Flex>
        </GridItem>
      </Grid>
      <header></header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
