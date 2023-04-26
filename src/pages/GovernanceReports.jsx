import React from "react";
import ReportType from "../components/ReportType";
import ReportScope from "../components/ReportScope";
import PrepareReportQuery from "../components/PrepareReportQuery";
import { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { FaUndo } from "react-icons/fa";

const GovernanceReports = () => {
  const [GovData, setGovData] = useState([]);
  const [reportType, setReportType] = useState("");
  const [reportScope, setReportScope] = useState("");
  const [reportTitle, setReportTitle] = useState("");
  const [showReportScope, setShowReportScope] = useState(false);
  const [showReportType, setShowReportType] = useState(true);
  const [showPrepareReportQuery, setShowPrepareReportQuery] = useState(false);

  const getGovData = async () => {
    const res = await fetch("/GovernanceData.json");

    const GovernanceData = await res.json();

    setGovData(GovernanceData);
  };

  useEffect(() => {
    getGovData();
  }, []);

  const handleReset = () => {
    console.log("RESET");
    setShowReportType(true);
    setShowReportScope(false);
    setShowPrepareReportQuery(false);
    setReportType("");
    setReportScope("");
    setReportTitle("");
  };

  console.log(reportType);
  console.log(GovData);

  return (
    <>
      <Flex justify="right">
        <Box
          as="button"
          size="lg"
          color="blue.900"
          fontSize="3xl"
          py="2"
          onClick={handleReset}
          pr="2rem"
          mb="1rem"
        >
          <FaUndo />
        </Box>
      </Flex>
      {showReportType && (
        <Flex h="100%" align="center" justify="center">
          <ReportType
            GovData={GovData}
            setShowReportScope={setShowReportScope}
            setReportType={setReportType}
            setShowReportType={setShowReportType}
            reportTitle={reportTitle}
          />
        </Flex>
      )}

      {showReportScope && (
        <ReportScope
          GovData={GovData}
          setShowReportScope={setShowReportScope}
          setShowPrepareReportQuery={setShowPrepareReportQuery}
          setReportTitle={setReportTitle}
          setReportScope={setReportScope}
          reportScope={reportScope}
        />
      )}
      {showPrepareReportQuery && (
        <PrepareReportQuery
          GovData={GovData}
          reportType={reportType}
          reportTitle={reportTitle}
          reportScope={reportScope}
        />
      )}
    </>
  );
};

export default GovernanceReports;
