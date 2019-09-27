import React, { Fragment } from "react"
import { BarGraphBar } from "@src/shared/theme/graphs/bar"
import { GraphComponentProps } from "@src/shared/components/graphs/graph-container"

export interface BarGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

export type BarGraphProps = GraphComponentProps

const BarGraph = (props: BarGraphProps): JSX.Element => {
  const { data, maxY } = props

  return (
    <Fragment>
      {data.map((row, index) => {
        const height = row.y === maxY ? 100 : (row.y / maxY) * 100
        const margin = 5
        const width = 100 / data.length - margin

        return (
          <BarGraphBar
            className="bar"
            key={index}
            x={index * width + margin + "%"}
            y={100 - height + "%"}
            width={width - margin + "%"}
            height={height + "%"}
          />
        )
      })}
    </Fragment>
  )
}

BarGraph.defaultProps = {
  data: [],
  barMargin: 5,
}

export default BarGraph
