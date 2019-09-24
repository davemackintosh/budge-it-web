import React from "react"
import TotalsReport from "@src/shared/components/reports/totals"

interface ReportPageProps {
  report: string
}

const ReportPage = (props: ReportPageProps): JSX.Element => {
  switch (props.report) {
    case "totals":
      return <TotalsReport />
  }
}

export default ReportPage
