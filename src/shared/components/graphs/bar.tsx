import React, { Fragment, useContext } from "react"
import { BarGraphBar } from "@src/shared/theme/graphs/bar"
import { CSVContext } from "@src/shared/contexts/csv"
import { csvAsAxisData, normalise } from "@src/shared/utils"

export interface BarGraphPropsData {
  x: number | Date
  y: number | Date
  label?: string
}

interface Props {
  svgWidth: number
  svgHeight: number
}

const BarGraph = (props: Props): JSX.Element => {
  const csvContext = useContext(CSVContext)
  const data = csvAsAxisData(csvContext.parsedCsvFile)
  const { minY, maxY } = csvContext
  const margin = 5
  const width = props.svgWidth - (margin * data.length) / data.length

  return (
    <Fragment>
      {data.map((row, index) => {
        console.log(row, normalise(row.y, minY, maxY))
        const height = props.svgHeight * normalise(row.y, minY, maxY)

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
