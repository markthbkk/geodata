import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsSubRegions from "./SearchResultsSubRegions";
import SearchResultsRegions from "./SearchResultsRegions";

const getRegions = async () => {
  const res = await fetch(
    "https://countries-api-7dz0.onrender.com/api/v1/countries/regions/distinct"
  );
  return res.json();
};

const Search = ({ prepareCountriesFilter, hideCountries }) => {
  const [region, setRegion] = useState("");
  const [disableSearchBar, setDisableSearchBar] = useState(false);
  const [showRegionsList, setShowRegionsList] = useState(true);
  const [showSubRegionsList, setShowSubRegionsList] = useState(false);

  const resetScreen = () => {
    setRegion("");
    setDisableSearchBar(false);
    setShowRegionsList(true);
      setShowSubRegionsList(false);
      hideCountries();
  };

  const handleClick1 = (region) => {
    setRegion(region);
    setDisableSearchBar(true);
    setShowRegionsList(false);
    setShowSubRegionsList(true);
  };

  const handleClick2 = () => {
    setShowSubRegionsList(false);
  };

  const regions = useQuery({ queryKey: ["regions"], queryFn: getRegions });

  return (
    <>
      <SearchBar
        disableSearchBar={disableSearchBar}
        resetScreen={resetScreen}
        prepareCountriesFilter={prepareCountriesFilter}
      />

      {showRegionsList && (
        <Suspense fallback={<p>Be Patient</p>}>
          <SearchResultsRegions
            regions={regions}
            clickHandler={handleClick1}
            hideCountries={hideCountries}
          />
        </Suspense>
      )}

      {showSubRegionsList && (
        <SearchResultsSubRegions
          region={region}
          showSubRegionsHandler={handleClick2}
          prepareCountriesFilter={prepareCountriesFilter}
        />
      )}
    </>
  );
};

export default Search;
