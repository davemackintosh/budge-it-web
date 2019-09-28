import React, { Fragment, useContext } from "react"
import { BarGraphBar } from "@src/shared/theme/graphs/bar"
import { CSVContext } from "@src/shared/contexts/csv"
import { csvAsAxisData, normalise } from "@src/shared/utils"

export interface BarGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

const BarGraph = (): JSX.Element => {
  const csvContext = useContext(CSVContext)
  const data = csvAsAxisData(csvContext.parsedCsvFile)
  const { minY, maxY } = csvContext

  return (
    <Fragment>
      {data.map((row, index) => {
        console.log(row, normalise(row.y, minY, maxY))
        const height = normalise(row.y, minY, maxY) * 100
        const margin = 5
        const width = 100 / data.length - margin

        return (
          <BarGraphBar
            className="bar"
            key={index}
            x={index * width + margin + "%"}
            y={100 - height + "%"}
            width={width - margin + "%"}
            height={height + "%"}
          />
        )
      })}
    </Fragment>
  )
}

export default BarGraph
