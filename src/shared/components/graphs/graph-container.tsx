import React, { Component, SVGProps } from "react"
import Axis from "@src/shared/components/graphs/axis"
import { GraphPropsData } from "types/graph"

interface GraphProps {
  padding?: number
  children: (
    SVGWidth: number,
    SVGHeight: number,
    data: GraphPropsData[],
  ) => JSX.Element | JSX.Element[]
  data: GraphPropsData[]
  SVGProps?: SVGProps<any>
  xLabel: string
  yLabel: string
}

interface GraphState {
  svgHeight: number
  svgWidth: number
}

class Graph extends Component<GraphProps, GraphState> {
  minX: number
  maxX: number
  minY: number
  maxY: number

  state = {
    svgHeight: 0,
    svgWidth: 0,
  }

  constructor(props: GraphProps) {
    super(props)
    const Ys = props.data.map((row: GraphPropsData) => row.y.valueOf())
    this.maxY = Math.max(...Ys)
    this.minY = Math.min(...Ys)
    const Xs = props.data.map((row: GraphPropsData) => row.x.valueOf()).sort()
    this.maxX = Math.max(...Xs)
    this.minX = Math.min(...Xs)
  }

  private didUpdateSvgHeight = false

  private setSVGRef(svg: SVGSVGElement): void {
    if (!this.didUpdateSvgHeight) {
      const box = svg.getBoundingClientRect()
      this.setState({
        svgHeight: box.height,
        svgWidth: box.width,
      })
      this.didUpdateSvgHeight = true
    }
  }

  render(): JSX.Element {
    return (
      <svg {...this.props.SVGProps} ref={this.setSVGRef.bind(this)}>
        <Axis
          xLabel={this.props.xLabel}
          yLabel={this.props.yLabel}
          minX={this.minX}
          maxX={this.maxX}
          minY={this.minY}
          maxY={this.maxY}
        />
        {this.props.children(
          this.state.svgWidth,
          this.state.svgHeight,
          this.props.data,
        )}
      </svg>
    )
  }
}

export default Graph
