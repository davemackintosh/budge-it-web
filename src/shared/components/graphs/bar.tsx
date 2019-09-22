import React, { SVGProps } from "react"
import Axis from "@src/shared/components/graphs/axis"
import { BarGraphBar } from "@src/shared/theme/graphs/bar"

export interface BarGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

export interface BarGraphProps extends SVGProps<any> {
  data: BarGraphPropsData[]
  xLabel: string
  yLabel: string
  barMargin?: number
}

const BarGraph = (props: BarGraphProps) => {
  const { xLabel, yLabel, data, ...svgProps } = props
  const Ys = data.map((row: BarGraphPropsData) => row.y.valueOf())
  const maxY = Math.max(...Ys)
  const minY = Math.min(...Ys)
  const Xs = data.map((row: BarGraphPropsData) => row.x.valueOf()).sort()
  const maxX = Math.max(...Xs)
  const minX = Math.min(...Xs)

  return (
    <svg {...svgProps}>
      <Axis
        xLabel={props.xLabel}
        yLabel={props.yLabel}
        minX={minX}
        maxX={maxX}
        minY={minY}
        maxY={maxY}
      />
      {props.data.map((data, index) => {
        const height =
          data.y.valueOf() === maxY ? 100 : (data.y.valueOf() / maxY) * 100
        const width =
          100 / props.data.length -
          (props.barMargin !== undefined ? props.barMargin : 5)
        const margin =
          index === 0 ? 0 : props.barMargin !== undefined ? props.barMargin : 5

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
    </svg>
  )
}

BarGraph.defaultProps = {
  data: [],
  barMargin: 5,
}

export default BarGraph
