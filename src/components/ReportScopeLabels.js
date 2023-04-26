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
        "Single Subregion Summary",
        ["RequestRegion", "RequestSubregionInRegion", "Generate/Subregions"],
      ],
      [
        "All Subregions in Region Summary",
        ["RequestRegion", "ListSubregionsInRegion", "Generate/Subregions"],
      ],
      [
        "All Subregions Summary",
        ["", "ListAllSubregions", "Generate/SubregionsAll"],
      ],
    ],

    Region: [
      ["Single Region Summary", ["RequestSingleRegion", "", "Generate/Region"]],
      ["All Regions Summary", ["", "", "Generate/Regions"]],
    ],
  };

  return jsonData;
}
