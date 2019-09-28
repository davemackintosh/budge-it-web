import React, { Component, SVGProps } from "react"
import Axis from "@src/shared/components/graphs/axis"
import { GraphPropsData } from "types/graph"

export interface GraphComponentProps {
  svgWidth: number
  svgHeight: number
  data: GraphPropsData[]
  minX: number
  minY: number
  maxX: number
  maxY: number
}

interface GraphProps {
  padding?: number
  children: JSX.Element
  SVGProps?: SVGProps<SVGElement>
  xLabel: string
  yLabel: string
  minX: number
  minY: number
  maxX: number
  maxY: number
}

interface GraphState {
  svgHeight: number
  svgWidth: number
}

class Graph extends Component<GraphProps, GraphState> {
  state = {
    svgHeight: 0,
    svgWidth: 0,
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
      <svg
        width="100%"
        height="600"
        {...this.props.SVGProps}
        ref={this.setSVGRef.bind(this)}
      >
        <Axis
          xLabel={this.props.xLabel}
          yLabel={this.props.yLabel}
          minX={this.props.minX}
          maxX={this.props.maxX}
          minY={this.props.minY}
          maxY={this.props.maxY}
        />
        {this.props.children}
      </svg>
    )
  }
}

export default Graph
