import React, { SVGProps } from "react"
import Axis from "@src/shared/components/graphs/axis"

export interface BarGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

export interface BarGraphProps extends SVGProps<any> {
  data: BarGraphPropsData[]
  xLabel: string
  yLabel: string
}

const BarGraph = (props: BarGraphProps) => {
  const { xLabel, yLabel, data, ...svgProps } = props
  const Ys = data.map((row: BarGraphPropsData) => row.y.valueOf())
  const maxY = Math.max(...Ys)
  const minY = Math.min(...Ys)
  const Xs = data.map((row: BarGraphPropsData) => row.x.valueOf())
  const maxX = Math.max(...Xs)
  const minX = Math.min(...Xs)

  const width = 100 / props.data.length

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
      {props.data.map((data, index) => (
        <g className="bar" key={data.x.valueOf()}>
          <rect
            height={data.y.valueOf() / maxY + "%"}
            x={index * width}
            y="10"
            width={width + "%"}
          ></rect>
        </g>
      ))}
    </svg>
  )
}

export default BarGraph
