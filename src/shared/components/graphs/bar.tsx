import React, { Fragment } from "react"
import Axis from "@src/shared/components/graphs/axis"
import { BarGraphBar } from "@src/shared/theme/graphs/bar"
import { GraphComponentProps } from "@src/shared/components/graphs/graph-container"

export interface BarGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

export type BarGraphProps = GraphComponentProps

const BarGraph = (props: BarGraphProps): JSX.Element => {
  const { data, minX, minY, maxX, maxY } = props

  return (
    <Fragment>
      {data.map((data, index) => {
        const height =
          data.y.valueOf() === maxY ? 100 : (data.y.valueOf() / maxY) * 100
        const margin = 5
        const width = 100 / props.data.length - margin

        return (
          <BarGraphBar
            className="bar"
            key={data.x.valueOf()}
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
