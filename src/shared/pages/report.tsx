import React, { ComponentType } from "react"
import { CSVConsumer } from "@src/shared/contexts/csv"
import { ParsedCsvEntry } from "types/csv"
import ReportBase, { ReportBaseProps } from "@src/shared/components/report-base"
import TotalsReport from "@src/shared/components/reports/totals"

interface ReportPageProps {
  report: string
}

class Graph404 extends ReportBase {}

const ReportPage = (props: ReportPageProps): JSX.Element | null => {
  let Graph: ComponentType<ReportBaseProps> = Graph404
  switch (props.report) {
    case "totals":
      Graph = TotalsReport
      break
  }

  return (
    <CSVConsumer>
      {(parsedCSV: ParsedCsvEntry[]): JSX.Element => (
        <Graph parsedCSV={parsedCSV} />
      )}
    </CSVConsumer>
  )
}

export default ReportPage
