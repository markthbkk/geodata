import { RadioGroup, Stack, Radio, Text, Flex } from "@chakra-ui/react";

const ReportTitle = ({
  reportScopeLabels,
  reportScope,
  setReportTitle,
  reportTitle,
  setShowPrepareReportQuery,
  setShowReportScope,
}) => {
  const changeHandler = (value) => {
    console.log(`VALUE: ${value}`);
    setReportTitle(value);
    setShowPrepareReportQuery(true);
    setShowReportScope(false);
  };

  return (
    <Flex
      bg="blue.900"
      color="white"
      w="100%"
      py="1rem"
      pl="1rem"
      align="center"
      justify="left"
      borderRadius="5px"
    >
      <RadioGroup onChange={changeHandler} value={reportTitle}>
        <Stack direction="column">
          {reportScopeLabels[reportScope].map((title) => (
            <Radio
              spacing="1rem"
              colorScheme="white"
              key={title[0]}
              value={title[0]}
            >
              <Text fontSize="1.2rem">{title[0]}</Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default ReportTitle;
