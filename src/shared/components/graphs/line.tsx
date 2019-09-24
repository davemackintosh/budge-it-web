import React, { SVGProps, Component } from "react"
import { LineGraphLine, LineGraphPoint } from "@src/shared/theme/graphs/line"

export interface LineGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

export interface LineGraphProps extends SVGProps<any> {
  data: LineGraphPropsData[]
  xLabel: string
  yLabel: string
}

class LineGraph extends Component<LineGraphProps> {
  static defaultProps = {
    data: [],
    barMargin: 5,
  }

  render(): JSX.Element {
    const {xLabel, yLabel, data} = this.props

    const baseWidth = this.state.svgWidth / this.props.data.length
    const points = this.props.data.map((data, index) => {
      const normalisedHeight = (data.y.valueOf() - minY) / (maxY - minY)
      const x = index * baseWidth

      // Flip the Y coords because this aint cartesion.
      return [x, this.state.svgHeight - this.state.svgHeight * normalisedHeight]
    })
    const linePoints = points.map((args: number[]): string => args.join(","))

    return (
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
    )
  }
}

export default LineGraph
