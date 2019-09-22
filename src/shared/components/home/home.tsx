import React from "react"
import BarGraph, { BarGraphPropsData } from "@src/shared/components/graphs/bar"

export default function Home() {
  const barGraphDetail: BarGraphPropsData[] = [
    {
      x: new Date(),
      label: "1",
      y: 100,
    },
    {
      x: new Date(Date.now() + Math.random() * 14e5),
      label: "1",
      y: 25,
    },
    {
      x: new Date(Date.now() + Math.random() * 14e5),
      label: "1",
      y: 75,
    },
  ]

  return (
    <div>
      <p>Hello</p>
      <BarGraph
        xLabel="X Axis"
        yLabel="Y Axis"
        data={barGraphDetail}
        width="100%"
        height="100%"
      />
    </div>
  )
}
