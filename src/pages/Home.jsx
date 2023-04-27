import { Flex, Image } from "@chakra-ui/react";
// import { useLoaderData } from "react-router-dom";
// import Countries from "../components/Countries";
// import Search from "../components/Search";
// import { useState } from "react";

export default function Home() {
  // const [showSearch, setShowSearch] = useState(true);
  // const [showCountries, setShowCountries] = useState(false);
  //   const [countriesFilter, setcountriesFilter] = useState({});
  //   const [filterType, setFilterType] = useState("")

  // const handleClickHideSearch = () => {
  //   setShowSearch(false);
  // };
  //   const handleClickShowCountries = (filteredCountriesObject) => {
  //       setShowCountries(true);
  //       if (filteredCountriesObject.SubRegion?.subregion) {

  //           setcountriesFilter(filteredCountriesObject.SubRegion.subregion)

  //           setFilterType("subregion");
  //       }

  //       console.log(filteredCountriesObject.PartialName)

  //       if (filteredCountriesObject.PartialName) {
  //       setcountriesFilter(filteredCountriesObject.PartialName)

  //       setFilterType("searchstring")
  //   }
  // };

  //   const hideCountries = () => {

  //       setShowCountries(false);
  //   }

  // const allCountries = useLoaderData();

  return (
    <Flex w="100%" alignItems="center" h="75vh">
      {/* {showSearch && (
            <Search
              prepareCountriesFilter={handleClickShowCountries}
              hideCountries={hideCountries}
            />
          )}
          {showCountries && (
            <Countries
              allCountries={allCountries}
              countriesFilter={countriesFilter}
              filterType={filterType}
            />
          )} */}
      <Image
        boxSize="50%"
        objectFit="cover"
        src="/QOG-Logo.png"
        alt="Quality Of Governement Project Logo"
      />
    </Flex>
  );
}
