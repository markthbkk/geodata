const getCountries = async () => {
  const res = await fetch("https://geodata-api.lkmi-tech.com/api/v1/countries");

  if (!res.ok) {
    throw Error("Could not fetch the list of coutries");
  }

  return res.json();
};

const countriesQuery = () => ({
  queryKey: ["countries"],
  queryFn: async () => getCountries(),
  staleTime: 3600 * 1000,
});


export const countriesLoader = (queryClient) => async () => {
  const query = countriesQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

