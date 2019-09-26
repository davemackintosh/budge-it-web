import React, { SyntheticEvent, useState, useContext } from "react"
import { CSVProvider } from "@src/shared/contexts/csv"
import { parseCsvFile } from "@src/shared/utils"
import { ParsedCsvEntry } from "types/csv"
import { BankContext } from "@src/shared/contexts/bank"

const CSVUpload = (): JSX.Element => {
  const [parsedCsvFile, setParsedCsvFile] = useState<ParsedCsvEntry[]>([])
  const indexer = useContext(BankContext)
  const onInputChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    const file = (event.currentTarget.files as FileList)[0]
    parseCsvFile(file, indexer).then((parsedCsvFile: ParsedCsvEntry[]) =>
      setParsedCsvFile(parsedCsvFile),
    )
  }

  console.log(parsedCsvFile)

  return (
    <CSVProvider value={parsedCsvFile}>
      <label htmlFor="csv-upload">Upload your bank statement</label>
      <input
        type="file"
        onChange={onInputChange}
        multiple={false}
        name="csv-upload"
        id="csv-upload"
      />
    </CSVProvider>
  )
}

export default CSVUpload
