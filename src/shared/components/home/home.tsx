import React from "react"
import BarGraph, { BarGraphPropsData } from "@src/shared/components/graphs/bar"
import styled from "styled-components"
import LineGraph from "@src/shared/components/graphs/line"
import Graph from "@src/shared/components/graphs/graph-container"
import { GraphPropsData } from "types/graph"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
`

export default function Home(): JSX.Element {
  const barGraphDetail: BarGraphPropsData[] = [
    {
      x: new Date(),
      label: "1",
      y: 10000,
    },
    {
      x: new Date(Date.now() + Math.random() * 14e5),
      label: "1",
      y: 2500,
    },
    {
      x: new Date(Date.now() + Math.random() * 14e5),
      label: "1",
      y: 7554,
    },
  ]

  return (
    <Grid>
      <Graph
        xLabel="X Axis"
        yLabel="Y Axis"
        SVGProps={{
          width: "100%",
          height: "100%",
        }}
        data={barGraphDetail}
      >
        {(
          SVGWidth: number,
          SVGHeight: number,
          data: GraphPropsData[],
        ): JSX.Element => (
          <BarGraph svgWidth={SVGWidth} svgHeight={SVGHeight} data={data} />
        )}
      </Graph>
      <LineGraph
        xLabel="X Axis"
        yLabel="Y Axis"
        data={barGraphDetail}
        width="100%"
        height="100%"
      />
    </Grid>
  )
}
