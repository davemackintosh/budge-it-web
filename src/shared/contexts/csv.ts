import React from "react"
import { ParsedCsvEntry } from "types/csv"

export const CSVContext = React.createContext<ParsedCsvEntry[]>([])
export const CSVProvider = CSVContext.Provider
export const CSVConsumer = CSVContext.Consumer
