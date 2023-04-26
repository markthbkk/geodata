import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  MenuDivider,
} from "@chakra-ui/react";

const ReportType = ({
  GovData,
  setShowReportScope,
  setReportType,
  setShowReportType,
}) => {
  const clickHandler = (value) => {
    console.log(`VALUE: ${value.target.innerHTML}`);
    setReportType(value.target.innerHTML);
    setShowReportScope(true);
    setShowReportType(false);
  };

  console.log(GovData)

  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          size="lg"
          variant="outline"
          bg="blue.900"
          color="white"
          border="0"
          _hover={{ bg: "blue.800" }}
          _expanded={{ bg: "blue.700" }}
          px="1rem"
          fontWeight="normal"
        >
          Report Type
        </MenuButton>

        <MenuList>
          {GovData.map((category) => (
            <Box key={category.displayName}>
              <MenuItem onClick={clickHandler}>{category.displayName}</MenuItem>
              <MenuDivider />
            </Box>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ReportType;
