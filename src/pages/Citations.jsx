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
      {GovData.map((item) => (
        <Flex
          direction="column"
          key={item.displayName}
          mb="1rem"
          w="90%"
          align="center"
          boxShadow="md"
        >
          <Box bg="blue.900" color="white" p=".5rem">
            {item.displayName}
          </Box>
          <Box border="1px solid black" p=".5rem">
            {item.citation}
          </Box>
        </Flex>
      ))}
    </>
  );
    
}

export default Citations;
