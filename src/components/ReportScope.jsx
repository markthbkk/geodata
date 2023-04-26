import { useState } from "react";

import reportsJSON from "./ReportScopeLabels";
import ReportTitle from "./ReportTitle";
import ReportScopeMenu from "./ReportScopeMenu";

const reportScopeLabels = reportsJSON();

const ReportScope = ({
  GovData,
  setShowReportScope,
  setShowPrepareReportQuery,
  setReportTitle,
  reportTitle,
  setReportScope,
  reportScope,
}) => {
  const [showReportTitle, setShowReportTitle] = useState(false);
  const [showReportScopeMenu, setShowReportScopeMenu] = useState(true);

  console.log(GovData);
  console.log(reportScopeLabels);
  console.log(reportScope);
  console.log(reportScopeLabels[reportScope]);
  console.log(reportTitle);

  return (
    <>
      {showReportScopeMenu && (
        <ReportScopeMenu
          reportScope={reportScope}
          setReportScope={setReportScope}
          setShowReportTitle={setShowReportTitle}
          setShowReportScopeMenu={setShowReportScopeMenu}
        />
      )}

      {showReportTitle && (
        <ReportTitle
          reportScopeLabels={reportScopeLabels}
          reportScope={reportScope}
          setReportTitle={setReportTitle}
          reportTitle={reportTitle}
          setShowPrepareReportQuery={setShowPrepareReportQuery}
          setShowReportScope={setShowReportScope}
        />
      )}
    </>
  );
};

export default ReportScope;
