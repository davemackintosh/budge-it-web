import React, { ComponentType, useContext } from "react"
import { RouteComponentProps, useParams } from "react-router"
import { CSVContext } from "@src/shared/contexts/csv"
import { Graph404 } from "@src/shared/components/graphs/graph-404"
import { TotalsReport } from "@src/shared/reports/totals"

const ReportPage = (): JSX.Element => {
  let Report: ComponentType<{}> = Graph404
  const csv = useContext(CSVContext)
  const params = useParams<{ report: string }>()

  switch (params.report) {
    case "totals":
      Report = TotalsReport
      break
  }

  return <Report {...csv} />
}

export default ReportPage
