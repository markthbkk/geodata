import { Card, Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";

import GovDataModal from "./GovDataModal";

import {useState} from 'react'

// const getGovData = async () => {
//   const res = await fetch("../../public/GovernanceData.json");
//   return res.json();
// };

const CountriesGeneralInfo = ({ countries }) => {
  //   const GovData = useQuery({ queryKey: ["govdata"], queryFn: getGovData });

  //   console.log(GovData);
  //  console.log(GovData?.data[0]);
    
    const [countryName, setCountryName] = useState("")

    const { isOpen, onOpen, onClose } = useDisclosure();

    const launchGovDataModal = (thisCountryName) => {
        console.log(countries)
        console.log(thisCountryName)
setCountryName(thisCountryName);
        onOpen()
// console.log(`IsOPEN: ${isOpen}`);


    }
    
     

  
  return (
    <>
      {" "}
      <Flex wrap="wrap" justify="space-around" mt="3rem">
        {countries.map((country) => (
          <Card
            w="30%"
            key={country.CountryCode}
            mb="2rem"
            p=".6rem"
            pb="1.5rem"
            bg="blue.700"
            border="2px solid"
            borderColor="black"
          >
            <Flex justify="space-around">
              <Text fontSize="1.5rem" mb="1.2rem" color="white">
                {country.CountryName}
              </Text>
            </Flex>
            <Box h="20vh" w="80%" ml="1.5rem" mb="1rem">
              <Image
                src={country.FlagImage}
                alt={country.CountryName}
                h="100%"
                fit="Contain"
              ></Image>
            </Box>
            <Flex justify="space-between">
              <Text fontSize="1.2rem" color="yellow.400">
                {`Country Code: `}
              </Text>
              <Text fontSize="1.2rem" color="yellow.400">
                {`${country.CountryCode}`}
              </Text>
            </Flex>
            {country.Capital && (
              <Flex justify="space-between">
                <Text fontSize="1.2rem" color="white">
                  {`Capital: `}
                </Text>
                <Text fontSize="1.2rem" color="white">
                  {`${country.Capital[0]}`}
                </Text>
              </Flex>
            )}
            <Flex justify="space-between">
              <Text fontSize="1.2rem" color="yellow.400">{`Region: `}</Text>
              <Text
                fontSize="1.2rem"
                color="yellow.400"
              >{`${country.Region}`}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="1.2rem" color="white">{`Subregion: `}</Text>
              <Text
                fontSize="1.2rem"
                color="white"
              >{`${country.Subregion}`}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="1.2rem" color="yellow.400">{`Population: `}</Text>
              <Text
                fontSize="1.2rem"
                color="yellow.400"
              >{`${country.Population}`}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="1.2rem" color="white">{`Area (sq.km): `}</Text>
              <Text
                fontSize="1.2rem"
                color="white"
              >{`${country.AreaKM2}`}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="1.2rem" color="yellow.400">{`Languages: `}</Text>
              <Text fontSize="1.2rem" color="yellow.400">{`${[
                ...Object.values(country.Languages),
              ].join(", ")}`}</Text>
            </Flex>

            <Flex justify="center" mt="2rem">
              <Box
                as="button"
                w="50%"
                bg="black"
                p=".5rem"
                fontSize="1.1rem"
                borderRadius="8px"
                fontWeight="400"
                color="white"
                border="1.5px solid"
                borderColor="white"
                onClick={() => {
                  launchGovDataModal(country.CountryName)
                }}
              >
                Governance Info
              </Box>
            </Flex>
          </Card>
        ))}
      </Flex>
          {isOpen && <GovDataModal
              countries={countries}
              countryName={countryName}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
          />}
    </>
  );
};

export default CountriesGeneralInfo;
