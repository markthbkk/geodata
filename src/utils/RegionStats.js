

const RegionStats = (
  countries,
  Regions,
  reportTypeAttrib,
  reportType,
  countryScope,
  allCountriesScope
) => {
  let OutputArray = [];
  let sortedOutputArray;

  console.log(reportTypeAttrib);

  console.log(`CTRY SCPE: ${countryScope}`);

  console.log(`TYPE: ${reportType}`);

  if (!countryScope) {
    Regions.forEach((region) => {
      let thisRegionOutoutObject = {};

      let scoresArray = [];

      console.log(`REGION: ${region}`);

      const filteredCountries = countries.filter((country) => {
        return country.Region === region;
      });

      const totalFilteredCountries = filteredCountries.length;

      filteredCountries.forEach((country) => {
        const score = country[reportTypeAttrib];

        if (score) {
          scoresArray.push(score);
        }
      });

      const countriesWithData = scoresArray.length;

      if (countriesWithData > 0) {
        const scoreTotal = scoresArray.reduce((total, item) => total + item);

        const scoreAverage = (scoreTotal / countriesWithData).toFixed(1);

        thisRegionOutoutObject["RName"] = region;
        thisRegionOutoutObject["ReportName"] = reportType;
        thisRegionOutoutObject["AverageScore"] = scoreAverage;
        thisRegionOutoutObject["NumberOfCountriesReporting"] =
          countriesWithData;
        thisRegionOutoutObject["NumberOfCountriesInR"] = totalFilteredCountries;

        OutputArray.push(thisRegionOutoutObject);
      }
    });

    sortedOutputArray = OutputArray.sort((a, b) => b.AverageScore - a.AverageScore);
  }

  if (countryScope && !allCountriesScope) {
    
    console.log(`DOING CTRY STUFF`);

    Regions.forEach((region) => {
    
      console.log(`REGION: ${region}`);

      const filteredCountries = countries.filter((country) => {
        return country.Region === region;
      });

     
      filteredCountries.forEach((country) => {
        let thisCountryOutoutObject = {};

        const score = country[reportTypeAttrib];

        if (score) {
          console.log(country);
          thisCountryOutoutObject["CName"] = country.CountryName;
          thisCountryOutoutObject["ReportName"] = reportType;
          thisCountryOutoutObject["Score"] = score.toFixed(1);

          OutputArray.push(thisCountryOutoutObject);
        }
      });
    });

    sortedOutputArray = OutputArray.sort((a, b) => b.Score - a.Score);
  }

  if (countryScope && allCountriesScope) {
    console.log(`DOING ALL CTRY STUFF`);

    // Regions.forEach((region) => {
    //   console.log(`REGION: ${region}`);

    //   const filteredCountries = countries.filter((country) => {
    //     return country.Region === region;
    //   });

      countries.forEach((country) => {
        let thisCountryOutoutObject = {};

        const score = country[reportTypeAttrib];

        if (score) {
          console.log(country);
          thisCountryOutoutObject["CName"] = country.CountryName;
          thisCountryOutoutObject["ReportName"] = reportType;
          thisCountryOutoutObject["Score"] = score.toFixed(1);

          OutputArray.push(thisCountryOutoutObject);
        }
      });
    sortedOutputArray = OutputArray.sort((a, b) => b.Score - a.Score);
  }

  console.log(OutputArray);

  

  return sortedOutputArray;
};


export default RegionStats