import React, { SyntheticEvent, Component } from "react"
import { CSVProvider } from "@src/shared/contexts/csv"
import { parseCsvFile } from "@src/shared/utils"
import { ParsedCsvEntry } from "types/csv"

interface State {
  parsedCsvFile: ParsedCsvEntry[]
}

class CSVUpload extends Component<{}, State> {
  state = {
    parsedCsvFile: [],
  }

  render(): JSX.Element {
    const onInputChange = (event: SyntheticEvent<HTMLInputElement>): void => {
      parseCsvFile((event.currentTarget.files as FileList)[0]).then(
        (parsedCsvFile: ParsedCsvEntry[]) => this.setState({ parsedCsvFile }),
      )
    }

    return (
      <CSVProvider value={this.state.parsedCsvFile}>
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
}
export default CSVUpload
