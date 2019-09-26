import React, { ComponentType, useContext } from "react"
import ReportBase, { ReportBaseProps } from "@src/shared/components/report-base"
import TotalsReport from "@src/shared/components/reports/totals"
import { RouteComponentProps } from "react-router"
import { CSVContext } from "@src/shared/contexts/csv"

type ReportPageProps = RouteComponentProps<{ report: string }>

class Graph404 extends ReportBase {}

const ReportPage = (props: ReportPageProps): JSX.Element | null => {
  let Graph: ComponentType<ReportBaseProps> = Graph404
  const { parsedCsvFile } = useContext(CSVContext)
  switch (props.match.params.report) {
    case "totals":
      Graph = TotalsReport
      break
  }

  return <Graph parsedCSV={parsedCsvFile} />
}

export default ReportPage
