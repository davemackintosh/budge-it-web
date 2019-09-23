import React, { SVGProps, Component } from "react"
import Axis from "@src/shared/components/graphs/axis"
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

export interface BarGraphState {
  svgHeight: number
  svgWidth: number
}

class LineGraph extends Component<LineGraphProps, BarGraphState> {
  static defaultProps = {
    data: [],
    barMargin: 5,
  }

  state = {
    svgHeight: 0,
    svgWidth: 0,
  }

  private didUpdateSvgHeight = false

  render(): JSX.Element {
    const { xLabel, yLabel, data, ...svgProps } = this.props
    const Ys = data.map((row: LineGraphPropsData) => row.y.valueOf())
    const maxY = Math.max(...Ys)
    const minY = Math.min(...Ys)
    const Xs = data.map((row: LineGraphPropsData) => row.x.valueOf()).sort()
    const maxX = Math.max(...Xs)
    const minX = Math.min(...Xs)

    const setSVGRef = (svg: SVGSVGElement): void => {
      if (!this.didUpdateSvgHeight) {
        const box = svg.getBoundingClientRect()
        this.setState({
          svgHeight: box.height,
          svgWidth: box.width,
        })
        this.didUpdateSvgHeight = true
      }
    }

    const points = this.props.data.map((data, index) => {
      const height = data.y.valueOf() === maxY ? 100 : data.y.valueOf() / maxY
      const width = 100 / this.props.data.length
      const x = (index * width) / 100

      // Flip the Y coords because this aint cartesion.
      return [this.state.svgWidth * x, this.state.svgHeight - height]
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
}

export default LineGraph
