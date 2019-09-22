import React, { SVGProps, useState } from "react"
import Axis from "@src/shared/components/graphs/axis"
import { LineGraphLine, LineGraphPoint } from "@src/shared/theme/graphs/line"

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

const LineGraph = (props: BarGraphProps): JSX.Element => {
  const { xLabel, yLabel, data, ...svgProps } = props
  const Ys = data.map((row: BarGraphPropsData) => row.y.valueOf())
  const maxY = Math.max(...Ys)
  const minY = Math.min(...Ys)
  const Xs = data.map((row: BarGraphPropsData) => row.x.valueOf()).sort()
  const maxX = Math.max(...Xs)
  const minX = Math.min(...Xs)

  const [svgHeight, setSvgHeight] = useState(0)

  const setSVGRef = (svg: SVGSVGElement): void => {
    if (svgHeight === 0) setSvgHeight(svg.getBBox().height)
  }

  const points = props.data.map((data, index) => {
    const height =
      data.y.valueOf() === maxY ? 100 : (data.y.valueOf() / svgHeight) * 100
    const width = 100 / props.data.length
    const x = index * width

    return [x, height]
  })
  const linePoints = points.map((args: number[]): string => args.join(","))

  return (
    <svg {...svgProps} ref={setSVGRef}>
      <Axis
        xLabel={xLabel}
        yLabel={yLabel}
        minX={minX}
        maxX={maxX}
        minY={minY}
        maxY={maxY}
      />
      <LineGraphLine
        className="line"
        x={0}
        y={0}
        points={linePoints.join(" ")}
      />
      {points.map((points: number[]) => (
        <LineGraphPoint
          key={points.join("-")}
          r="5"
          cx={points[0]}
          cy={points[1]}
        />
      ))}
    </svg>
  )
}

LineGraph.defaultProps = {
  data: [],
  barMargin: 5,
}

export default LineGraph
