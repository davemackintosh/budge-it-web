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
}

class LineGraph extends Component<LineGraphProps, BarGraphState> {
  static defaultProps = {
    data: [],
    barMargin: 5,
  }

  state = {
    svgHeight: 0,
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
        this.setState({
          svgHeight: svg.getBBox().height,
        })
        this.didUpdateSvgHeight = true
      }
    }

    const points = this.props.data.map((data, index) => {
      const height =
        data.y.valueOf() === maxY
          ? 100
          : (data.y.valueOf() / this.state.svgHeight) * 100
      const width = 100 / this.props.data.length
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
}

export default LineGraph
