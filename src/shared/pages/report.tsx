import React from "react"
import { CSVConsumer } from "@src/shared/contexts/csv"
import { ParsedCsvEntry } from "types/csv"
import ReportBase from "@src/shared/components/report-base"
import TotalsReport from "@src/shared/components/reports/totals"

interface ReportPageProps {
  report: string
}

class Graph404 extends ReportBase {}

const ReportPage = (props: ReportPageProps): JSX.Element | null => {
  let Graph = Graph404
  switch (props.report) {
    case "totals":
      Graph = TotalsReport
      break
  }

  return <CSVConsumer>{(parsedCSV: ParsedCsvEntry[]) => <Graph />}</CSVConsumer>
}

export default ReportPage
