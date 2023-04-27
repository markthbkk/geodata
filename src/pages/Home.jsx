import { Flex, Image } from "@chakra-ui/react";
import QOGLogo from "/QOG-Logo.png"


export default function Home() {
  

  return (
    <Flex w="100%" alignItems="center" justifyContent="center" h="55vh">
      <Image
        boxSize="50%"
        objectFit="contain"
        src={QOGLogo}
        alt="Quality Of Governement Project Logo"
        // border="2px solid black"
        boxShadow="md"
      />
    </Flex>
  );
}
