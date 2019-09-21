import React from "react"
import BarGraph, {BarGraphPropsData} from '@src/shared/components/graphs/bar'

export default function Home() {
  const barGraphDetail: BarGraphPropsData[] = [
    {
      x: new Date(),
      y: 1,
      label: "1",
      value: 1,
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
