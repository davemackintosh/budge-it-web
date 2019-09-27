import React, { ComponentType, useContext } from "react"
import ReportBase, { ReportBaseProps } from "@src/shared/components/report-base"
import TotalsReport from "@src/shared/components/reports/totals"
import { RouteComponentProps } from "react-router"
import { CSVContext } from "@src/shared/contexts/csv"

type ReportPageProps = RouteComponentProps<{ report: string }>

class Graph404 extends ReportBase {}

const ReportPage = (props: ReportPageProps): JSX.Element | null => {
  let Report: ComponentType<ReportBaseProps> = Graph404
  const csv = useContext(CSVContext)
  switch (props.match.params.report) {
    case "totals":
      Report = TotalsReport
      break
  }

  return <Report {...csv} />
}

export default ReportPage
