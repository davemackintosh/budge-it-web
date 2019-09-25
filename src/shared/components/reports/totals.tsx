import React from "react"
import ReportBase from "@src/shared/components/report-base"
import Graph, {
  GraphComponentProps,
} from "@src/shared/components/graphs/graph-container"
import { CSVConsumer } from "@src/shared/contexts/csv"
import BarGraph from "@src/shared/components/graphs/bar"
import { withRouter } from "react-router"
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
      <CSVConsumer>
        {(parsedCSV: ParsedCsvEntry[]): JSX.Element => (
          <Graph
            xLabel="Month"
            yLabel="Amount Spent"
            data={this.convertCsvDataToGraphData(parsedCSV)}
          >
            {(args: GraphComponentProps): JSX.Element => <BarGraph {...args} />}
          </Graph>
        )}
      </CSVConsumer>
    )
  }
}

export default withRouter(TotalsReport)
