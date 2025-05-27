import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Card,
  Flex,
} from "@chakra-ui/react";
// import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

function GovDataModal({ countries, countryName, isOpen, onOpen, onClose }) {
  console.log(`${isOpen}`);

  const [GovData, setGovData] = useState([]);

  const getGovData = async () => {
    console.log("HI");
    const res = await fetch("GovernanceData.json");

    const GovernanceData = await res.json();

    setGovData(GovernanceData);
  };

  useEffect(() => {
    getGovData();
  }, []);

  const thisCountryArray = countries.filter((country) => {
    return country.CountryName === countryName;
  });

  const thisCountry = thisCountryArray[0];
  console.log(thisCountry);

  GovData && console.log(GovData);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb="1.5rem">{`${countryName} Governance Data`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {GovData.map((category) => (
              <Card mb="2rem" key={category.name}>
                {thisCountry[category.name] && (
                  <Box>
                    <Box ml="3rem" my="1rem" fontSize="1.5rem">
                      {category.displayName}
                    </Box>
                    <Box
                      ml="3rem"
                      my="1rem"
                      fontSize=".75rem"
                      fontStyle="italic"
                      color="blue.800"
                    >
                      {category.description}
                    </Box>
                    <Flex
                      ml="3rem"
                      mb="1rem"
                      border="2px solid"
                      borderColor="blue.800"
                      borderRadius="100px"
                      w={
                        thisCountry[`${category.name}`].toFixed(1).toString()
                          .length > 4
                          ? "5rem"
                          : "3rem"
                      }
                      h="3rem"
                      align="center"
                      justify="center"
                      bg="blue.800"
                      color="white"
                      fontStyle="Italic"
                      fontWeight="400"
                    >
                      {thisCountry[`${category.name}`].toFixed(1)}
                    </Flex>
                    <Flex
                      w="50%"
                      bg="white"
                      borderLeft="1px solid"
                      borderBottom="1px solid"
                      borderColor="gray.300"
                      h="4rem"
                      align="Center"
                      mt="1.5rem"
                      mb=".5rem"
                      ml="3rem"
                    >
                      <Box
                        h="2rem"
                        bg={
                          thisCountry[category.name] >=
                            category.greenLowerBoundary && category.highIsBetter
                            ? "green.800"
                            : thisCountry[category.name] >=
                                category.yellowLowerBoundary &&
                              category.highIsBetter
                            ? "yellow.400"
                            : thisCountry[category.name] >=
                                category.redLowerBoundary &&
                              category.highIsBetter
                            ? "red.400"
                            : thisCountry[category.name] >=
                                category.redLowerBoundary &&
                              !category.highIsBetter
                            ? "red.400"
                            : thisCountry[category.name] >=
                                category.yellowLowerBoundary &&
                              !category.highIsBetter
                            ? "yellow.400"
                            : "green.800"
                        }
                        w={`${
                          (thisCountry[category.name] / category.maximum) * 100
                        }%`}
                      ></Box>
                    </Flex>
                    <Flex justify="space-between" w="50%" ml="3rem" mb="1.5rem">
                      <Box>{category.minimum}</Box>
                      <Box>{category.maximum}</Box>
                    </Flex>
                  </Box>
                )}
              </Card>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button bg="blue.800" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GovDataModal;
