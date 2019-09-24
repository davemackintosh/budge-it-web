import React, { Component } from "react"
import { withRouter, RouteComponentProps } from "react-router"

type ReportPageProps = RouteComponentProps<{ report: string }>

class ReportPage extends Component<ReportPageProps> {
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

export default withRouter(ReportPage)
