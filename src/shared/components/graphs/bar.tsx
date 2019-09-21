import React, {SVGProps} from "react"
import Axis from '@src/shared/components/graphs/axis'

export interface BarGraphPropsData {
  x: number
  y: number
  label?: string
  value: number
}

export interface BarGraphProps extends SVGProps<any> {
  data: BarGraphPropsData[]
  xLabel: string
  yLabel: string
}

const BarGraph = (props: BarGraphProps) => {
  const {xLabel, yLabel, data, ...svgProps} = props
  const Ys = data.map((row: BarGraphPropsData) => row.y)
  const maxY = Math.max(...Ys)
  const minY = Math.min(...Ys)
  const Xs = data.map((row: BarGraphPropsData) => row.x)
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
      <g className="bar">
        <rect height="10" y="10" width="3"></rect>
      </g>
    </svg>
  )
}

export default BarGraph
