import CountriesGeneralInfo from "./CountriesGeneralInfo";

const Countries = ({ allCountries, countriesFilter, filterType }) => {

    console.log(filterType)

    console.log(countriesFilter);
  
  let filteredCountries;

    if (filterType === "subregion") {
      
        console.log(`COUNTRIES FILTER: ${countriesFilter}`);

    filteredCountries = allCountries.filter((country) => {
      return country.Subregion == countriesFilter;
    });
  }

  if (filterType === "searchstring") {
    filteredCountries = allCountries.filter((country) => {
      return country.CountryName.toLowerCase().includes(countriesFilter.toLowerCase())
    });
  }

  return (
    <div>
      <CountriesGeneralInfo countries={filteredCountries} />
    </div>
  );
};

export default Countries;
