import React from "react"
import TotalsReport from "@src/shared/components/reports/totals"

interface ReportPageProps {
  report?: string
}

const ReportPage = (props: ReportPageProps): JSX.Element | null => {
  switch (props.report) {
    case "totals":
      return <TotalsReport />
  }

  return null
}

export default ReportPage
