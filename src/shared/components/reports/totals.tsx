import React from "react"
import ReportBase from "@src/shared/components/report-base"
import Graph, {
  GraphComponentProps,
} from "@src/shared/components/graphs/graph-container"
import { CSVConsumer } from "@src/shared/contexts/csv"
import BarGraph from "@src/shared/components/graphs/bar"
import { GraphPropsData } from "types/graph"

class TotalsReport extends ReportBase {
  renderGraph(): JSX.Element {
    return (
      <CSVConsumer>
        {(parsedCSV: GraphPropsData[]): JSX.Element => (
          <Graph xLabel="Month" yLabel="Amount Spent" data={parsedCSV}>
            {(args: GraphComponentProps): JSX.Element => <BarGraph {...args} />}
          </Graph>
        )}
      </CSVConsumer>
    )
  }
}

export default TotalsReport
