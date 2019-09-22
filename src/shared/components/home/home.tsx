import React from "react"
import BarGraph, { BarGraphPropsData } from "@src/shared/components/graphs/bar"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
`

export default function Home() {
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
      <BarGraph
        xLabel="X Axis"
        yLabel="Y Axis"
        data={barGraphDetail}
        width="100%"
        height="100%"
      />
    </Grid>
  )
}
