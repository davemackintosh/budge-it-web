import React, { useState } from "react"
import { CSVProvider } from "@src/shared/contexts/csv"

const CSVUpload = (): JSX.Element => {
  const [parsedCsvFile, setParsedCsvFile] = useState([])

  return (
    <CSVProvider value={parsedCsvFile}>
      <label htmlFor="csv-upload">Upload your bank statement</label>
      <input type="file" multiple={false} name="csv-upload" id="csv-upload" />
    </CSVProvider>
  )
}

export default CSVUpload
