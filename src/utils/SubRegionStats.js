const subRegionStats = (
  countries,
  subRegions,
  reportTypeAttrib,
  reportType,
  countryScope
) => {
  let outputArray = [];
  let sortedOutputArray
  

  console.log(reportTypeAttrib);

  console.log(`TYPE: ${reportType}`);

  console.log(`COUNTRY SCOPE: ${countryScope}`);

  console.log(subRegions)

  subRegions.forEach((subregion) => {
    let thisSubRegionOutoutObject = {};

    let scoresArray = [];

    console.log(`SUB: ${subregion}`);

    const filteredCountries = countries.filter((country) => {
      return country.Subregion === subregion;
    });

    // console.log(filteredCountries);

    const totalFilteredCountries = filteredCountries.length;

    // console.log(totalFilteredCountries);

    if (!countryScope) {
      filteredCountries.forEach((country) => {

        console.log(`DOING SR STUFF`)
        const score = country[reportTypeAttrib];

        if (score) {
          scoresArray.push(score);
        }
      });

      const countriesWithData = scoresArray.length;

      if (countriesWithData > 0) {
        const scoreTotal = scoresArray.reduce((total, item) => total + item);

        const scoreAverage = (scoreTotal / countriesWithData).toFixed(1);

        thisSubRegionOutoutObject["SRName"] = subregion;
        thisSubRegionOutoutObject["ReportName"] = reportType;
        thisSubRegionOutoutObject["AverageScore"] = scoreAverage;
        thisSubRegionOutoutObject["NumberOfCountriesReporting"] =
          countriesWithData;
        thisSubRegionOutoutObject["NumberOfCountriesInSR"] =
          totalFilteredCountries;

        outputArray.push(thisSubRegionOutoutObject);


      }

      sortedOutputArray = outputArray.sort(
        (a, b) => b.AverageScore - a.AverageScore
      );  

    } else {

console.log(`DOING CTRY STUFF`);

      filteredCountries.forEach((country) => {
        let thisCountryOutoutObject = {};

        const score = country[reportTypeAttrib];

        if (score) {
          console.log(country);
          thisCountryOutoutObject["CName"] = country.CountryName;
          thisCountryOutoutObject["ReportName"] = reportType;
          thisCountryOutoutObject["Score"] = score.toFixed(1);

          outputArray.push(thisCountryOutoutObject);
        }
      });

    sortedOutputArray = outputArray.sort((a, b) => b.Score - a.Score);  
    }
  });


 


  if (outputArray.length) {
    console.log(outputArray);



return sortedOutputArray;
  } 
};

export default subRegionStats;
