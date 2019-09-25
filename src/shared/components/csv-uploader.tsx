import React, { useState, SyntheticEvent } from "react"
import { CSVProvider } from "@src/shared/contexts/csv"
import { parseCsvFile } from "@src/shared/utils"
import { ParsedCsvEntry } from "types/csv"

const CSVUpload = (): JSX.Element => {
  const [parsedCsvFile, setParsedCsvFile] = useState<ParsedCsvEntry[]>([])
  const onInputChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    parseCsvFile((event.currentTarget.files as FileList)[0]).then(
      (parsedCsvFile: ParsedCsvEntry[]) => setParsedCsvFile(parsedCsvFile),
    )
  }

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
