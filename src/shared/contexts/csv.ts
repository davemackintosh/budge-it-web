import React from "react"
import { ParsedCsvEntry } from "types/csv"

export interface CSVContextValue {
  setParsedCsv?: (parsedCsvFile: ParsedCsvEntry[]) => void
  parsedCsvFile: ParsedCsvEntry[]
}

export const CSVContext = React.createContext<CSVContextValue>({
  parsedCsvFile: [],
})
export const CSVProvider = CSVContext.Provider
export const CSVConsumer = CSVContext.Consumer
