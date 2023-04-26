import reportsJSON from "./ReportScopeLabels";
import RegionGrid from "./RegionGrid";
import CountryOutputGrid from "./CountryOutputGrid";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import RequestSubregionInRegion from "./RequestSubregionInRegion";
import RequestSubregionsInRegion from "./RequestSubregionsInRegion";
import subRegionStats from "../utils/SubRegionStats";
import RegionStats from "../utils/RegionStats";
import { useLoaderData } from "react-router-dom";
import SubRegionGrid from "./SubRegionGrid";
import RegionOutputGrid from "./RegionOutputGrid";

const getRegions = async () => {
  const res = await fetch(
    "https://countries-api-7dz0.onrender.com/api/v1/countries/regions/distinct"
  );
  const allRegionData = await res.json();

  console.log("QUERY");

  return allRegionData;
};

const reportScopeLabels = reportsJSON();

const PrepareReportQuery = ({
  reportType,
  reportScope,
  reportTitle,
  GovData,
}) => {
  const [region, setRegion] = useState();
  const [singleRegion, setSingleRegion] = useState([]);
  // const [allRegions, setAllRegions] = useState([]);
  const [subregion, setSubregion] = useState();
  const [subregions, setSubregions] = useState([]);
  const [allSubregions, setAllSubregions] = useState([]);
  const [firstStep, setFirstStep] = useState("");
  const [secondStep, setSecondStep] = useState("");
  const [finalStep, setFinalStep] = useState("");
  const [countryOutputDataArray, setCountryOutputDataArray] = useState([]);
  const [subRegionOutputDataArray, setSubregionOutputDataArray] = useState([]);
  const [RegionOutputDataArray, setRegionOutputDataArray] = useState([]);
  const [countryScope, setCountryScope] = useState(false);
  const [allCountriesScope, setAllCountriesScope] = useState(false);

  const allCountries = useLoaderData();

  const getAllSubRegions = () => {
    let allSubRegionsArray = [];

    allCountries.forEach((country) => {
      !allSubRegionsArray.includes(country.Subregion)
        ? allSubRegionsArray.push(country.Subregion)
        : null;
    });

    return allSubRegionsArray;
  };

  useEffect(() => {
    const allSubRegions = getAllSubRegions();

    setAllSubregions(allSubRegions);
  }, []);

  const clickHandler1 = (region) => {
    setFirstStep("");
    setRegion(region);
  };

  const clickHandler2 = (subRegion) => {
    setSecondStep("");
    setSubregion(subRegion);
    let tempSubregionsArray = [];
    tempSubregionsArray.push(subRegion);
    setSubregions(tempSubregionsArray);
  };

  const clickHandler3 = (subRegions) => {
    setSecondStep("");
    setSubregions(subRegions);
  };

  const clickHandler4 = (region) => {
    setFirstStep("");
    let tempSingleRegionArray = [];
    tempSingleRegionArray.push(region);
    setSingleRegion(tempSingleRegionArray);
  };

  const clickHandler5 = (subRegion) => {
    setSecondStep("");
    setSubregion(subRegion);
    let tempSubregionsArray = [];
    tempSubregionsArray.push(subRegion);
    setSubregions(tempSubregionsArray);
    setCountryScope(true);
  };

  const clickHandler6 = (region) => {
    setFirstStep("");
    let tempSingleRegionArray = [];
    tempSingleRegionArray.push(region);
    setSingleRegion(tempSingleRegionArray);
    setCountryScope(true);
  };

  const prepQueryOptions = reportScopeLabels[reportScope];

  const activeQueryOption = prepQueryOptions.filter((item) => {
    return item[0] === reportTitle;
  });

  const initialStep = activeQueryOption[0][1];

  //   console.log(initialStep.length);
  //   console.log(initialStep);

  useEffect(() => {
    setFirstStep(initialStep[0]);
    setSecondStep(initialStep[1]);
    setFinalStep(initialStep[2]);
  }, []);

  let GovDataArray = [];

  const keys = Object.keys(GovData);

  keys.forEach((key) => {
    GovDataArray.push(GovData[key]);
  });

  console.log(GovDataArray);
  console.log(reportType);

  const reportTypeAttributeName = GovDataArray.filter((category) =>
    category.displayName.includes(reportType)
  );

  const reportTypeAttrib = reportTypeAttributeName[0].name;
  console.log(reportTypeAttrib);

  const regions = useQuery({ queryKey: ["regions"], queryFn: getRegions });
  //     setAllRegions(regions)
  console.log(regions);

  useEffect(() => {
    !countryScope &&
      setSubregionOutputDataArray(
        subRegionStats(
          allCountries,
          subregions,
          reportTypeAttrib,
          reportType,
          countryScope
        )
      );

    countryScope &&
      setCountryOutputDataArray(
        subRegionStats(
          allCountries,
          subregions,
          reportTypeAttrib,
          reportType,
          countryScope
        )
      );
  }, [subregions]);

  useEffect(() => {
    !countryScope &&
      setRegionOutputDataArray(
        RegionStats(
          allCountries,
          singleRegion,
          reportTypeAttrib,
          reportType,
          countryScope
        )
      );

    countryScope &&
      setCountryOutputDataArray(
        RegionStats(
          allCountries,
          singleRegion,
          reportTypeAttrib,
          reportType,
          countryScope
        )
      );
  }, [singleRegion]);

  const prepAllRegionsDisplay = () => {
    setFinalStep("");
    setRegionOutputDataArray(
      RegionStats(allCountries, regions.data, reportTypeAttrib, reportType, countryScope, allCountriesScope)
    );
  };

  firstStep === "" &&
    finalStep === "Generate/Regions" &&
    regions.data &&
    prepAllRegionsDisplay();

  useEffect(() => {
    setCountryOutputDataArray(
      RegionStats(
        allCountries,
        singleRegion,
        reportTypeAttrib,
        reportType,
        countryScope,
        allCountriesScope
      )
    );
  }, [allCountriesScope]);

  const triggerAllCountriesScope = () => {
    setFirstStep("");
    setAllCountriesScope(true);
    setCountryScope(true);
  };

  firstStep === "CountriesAllCountries" && triggerAllCountriesScope();

  console.log(countryOutputDataArray);
  console.log(subRegionOutputDataArray);
  console.log(RegionOutputDataArray);

  return (
    <div>
      {firstStep === "RequestRegion" && (
        <RegionGrid regions={regions} clickHandler={clickHandler1} />
      )}
      {firstStep === "" &&
        secondStep === "RequestSubregionInRegion" &&
        finalStep !== "RequestCountryInSubregion" && (
          <RequestSubregionInRegion
            region={region}
            clickHandler={clickHandler2}
          />
        )}
      {secondStep === "RequestSubregionInRegion" &&
        finalStep === "RequestCountryInSubregion" && (
          <RequestSubregionInRegion
            region={region}
            clickHandler={clickHandler5}
          />
        )}

      {firstStep === "" && secondStep === "ListSubregionsInRegion" && (
        <RequestSubregionsInRegion
          region={region}
          clickHandler={clickHandler3}
          allSubregionsRequired={false}
          allSubRegions={allSubregions}
        />
      )}
      {firstStep === "" && secondStep === "ListAllSubregions" && (
        <RequestSubregionsInRegion
          region={region}
          clickHandler={clickHandler3}
          allSubregionsRequired={true}
          allSubRegions={allSubregions}
        />
      )}
      {countryOutputDataArray?.length > 0 && (
        <CountryOutputGrid inputArray={countryOutputDataArray} />
      )}
      {subRegionOutputDataArray?.length > 0 && (
        <SubRegionGrid inputArray={subRegionOutputDataArray} />
      )}
      {RegionOutputDataArray?.length > 0 && (
        <RegionOutputGrid inputArray={RegionOutputDataArray} />
      )}
      {firstStep === "RequestSingleRegion" && (
        <RegionGrid regions={regions} clickHandler={clickHandler4} />
      )}
      {firstStep === "CountriesRequestSingleRegion" && (
        <RegionGrid regions={regions} clickHandler={clickHandler6} />
      )}
    </div>
  );
};

export default PrepareReportQuery;
