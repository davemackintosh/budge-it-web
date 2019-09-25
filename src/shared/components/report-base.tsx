import React, { Component } from "react"
import { RouteComponentProps } from "react-router"
import { ParsedCsvEntry } from "types/csv"

interface ReportBaseProps extends RouteComponentProps<{ report: string }> {
  parsedCSV: ParsedCsvEntry[]
}

class ReportBase extends Component<ReportBaseProps> {
  public renderGraph(): JSX.Element | null {
    console.error(
      "You should not consume this class directly, extend it and override the render functions.",
    )
    return null
  }

  public renderBreakdown(): JSX.Element | null {
    console.error(
      "You should not consume this class directly, extend it and override the render functions.",
    )
    return null
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.renderGraph()}
        {this.renderBreakdown()}
      </div>
    )
  }
}

export default ReportBase
