import { useQuery } from "@tanstack/react-query";
import { Flex, Image } from "@chakra-ui/react";
import QOGLogo from "/QOG-Logo.png";

// const getCountries = async () => {
//   const res = await fetch(
//     "https://countries-api-7dz0.onrender.com/api/v1/countries"
//   );

//   if (!res.ok) {
//     throw Error("Could not fetch the list of coutries");
//   }

//   return res.json();
// };

// const countries = useQuery({ queryKey: ["countries"], queryFn: getCountries });

// console.log(countries);

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
