import { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";

const Citations = () => {
  const [GovData, setGovData] = useState([]);

const getGovData = async () => {
  const res = await fetch("/geodata/GovernanceData.json");

  const GovernanceData = await res.json();

  setGovData(GovernanceData);
};

useEffect(() => {
  getGovData();
}, []);




  return (
    <>
      <Flex justify="center" w="100%">
        {GovData.map((item) => (
          <Flex
            direction="column"
            key={item.displayName}
            mb="1rem"
            w="90%"
            boxShadow="md"
          >
            <Box bg="blue.900" color="white" p=".5rem" w="100%">
              {item.displayName}
            </Box>
            <Box border="1px solid black" p=".5rem" w="100%">
              {item.citation}
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
    
}

export default Citations;
