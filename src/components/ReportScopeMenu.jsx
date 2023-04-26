import { Flex, RadioGroup, Stack, Radio, Text } from "@chakra-ui/react";

const ReportScopeMenu = ({ reportScope, setReportScope, setShowReportTitle, setShowReportScopeMenu }) => {


const changeHandler = (value) => {
  setReportScope(value);
  setShowReportTitle(true);
  setShowReportScopeMenu(false);
};

  return (
    <Flex
      bg="blue.900"
      color="white"
      w="80%"
      py="1rem"
      pl="1rem"
      align="center"
      justify="left"
      borderRadius="5px"
      mx="1rem"
    >
      <RadioGroup onChange={changeHandler} value={reportScope}>
        <Stack direction="column">
          <Radio spacing="1rem" value="Region" colorScheme="white">
            <Text fontSize="1.2rem">Region</Text>
          </Radio>
          <Radio spacing="1rem" value="Subregion" colorScheme="white">
            <Text fontSize="1.2rem">Subregion</Text>
          </Radio>
          <Radio spacing="1rem" value="Country" colorScheme="white">
            <Text fontSize="1.2rem">Country</Text>
          </Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default ReportScopeMenu;
