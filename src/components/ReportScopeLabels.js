export default function reportsJSON() {
  const jsonData = {
    Country: [
      // ["Single Country", ["RequestCountry", "", "Generate/Countries"]],
      [
        "All Countries in Subregion",
        [
          "RequestRegion",
          "RequestSubregionInRegion",
          "RequestCountryInSubregion",
        ],
      ],
      [
        "All Countries in Region",
        ["CountriesRequestSingleRegion", "RequestCountryInRegion", "Generate/Countries"],
      ],
      ["All Countries", ["CountriesAllCountries", "", "Generate/Country-All"]],
    ],

    Subregion: [
      [
        "Single Subregion",
        ["RequestRegion", "RequestSubregionInRegion", "Generate/Subregions"],
      ],
      [
        "All Subregions in Region",
        ["RequestRegion", "ListSubregionsInRegion", "Generate/Subregions"],
      ],
      [
        "All Subregions",
        ["", "ListAllSubregions", "Generate/SubregionsAll"],
      ],
    ],

    Region: [
      ["Single Region", ["RequestSingleRegion", "", "Generate/Region"]],
      ["All Regions", ["", "", "Generate/Regions"]],
    ],
  };

  return jsonData;
}
