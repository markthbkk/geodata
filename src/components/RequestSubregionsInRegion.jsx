import { useQuery } from "@tanstack/react-query";
import { Flex, Spinner } from "@chakra-ui/react";

const RequestSubregionsInRegion = ({
  region,
  clickHandler,
  allSubregionsRequired,
  allSubRegions,
}) => {
  let finalData;
  

  const getSubRegions = async (region) => {
    const url =
      "https://geodata-api.lkmi-tech.com/api/v1/countries/subregions/" + region;

    console.log(url);
    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

    return data;
  };

  if (!allSubregionsRequired) {
    console.log("Processing SubRegions in Region");

    const { data, isFetching } = useQuery({
      queryKey: [["subregions"], region],
      queryFn: () => getSubRegions(region),
    });

    data && clickHandler(data);

    return (
      <>
        {isFetching ? (
          <Flex justify="center">
            <Spinner size="lg" color="blue.900" />
          </Flex>
        ) : null}
      </>
    );

  } else {
    console.log("Processing All SubRegions");

    finalData = allSubRegions;

    clickHandler(finalData);
    
    return <></>;

  }


}

export default RequestSubregionsInRegion;
