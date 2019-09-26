import React, { Fragment } from "react"
import ReportBase from "@src/shared/components/report-base"
import Graph, {
  GraphComponentProps,
} from "@src/shared/components/graphs/graph-container"
import BarGraph from "@src/shared/components/graphs/bar"
import { ParsedCsvEntry } from "types/csv"
import { GraphPropsData } from "types/graph"

class TotalsReport extends ReportBase {
  private convertCsvDataToGraphData(
    csvData: ParsedCsvEntry[],
  ): GraphPropsData[] {
    return csvData.map(row => ({
      x: row.date,
      y: row.difference,
    }))
  }

  renderGraph(): JSX.Element {
    return (
      <Fragment>
        <Graph
          xLabel="Month"
          yLabel="Amount Spent"
          data={this.convertCsvDataToGraphData(this.context.parsedCSV)}
        >
          {(args: GraphComponentProps): JSX.Element => <BarGraph {...args} />}
        </Graph>
      </Fragment>
    )
  }
}

export default TotalsReport
