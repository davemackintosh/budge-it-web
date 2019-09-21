import React, {Fragment} from "react"

export interface AxisProps {
  xLabel: string
  yLabel: string
  minX: number | Date
  maxX: number | Date
  minY: number | Date
  maxY: number | Date
}

const Axis = (props: AxisProps) => (
  <Fragment>
    <g className="grid x-grid">
      <line x1="90" x2="90" y1="5" y2="371"></line>
      <text className="x-label">
        {props.xLabel}
      </text>
    </g>
    <g className="grid y-grid">
      <line x1="90" x2="705" y1="370" y2="370"></line>
      <text className="y-label">
        {props.yLabel}
      </text>
    </g>
  </Fragment>
)

export default Axis

