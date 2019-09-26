import React, { Component } from "react"
import Layout from "@src/layout"
import { CSVProvider } from "@src/shared/contexts/csv"
import { ParsedCsvEntry } from "types/csv"
import { BankProvider } from "@src/shared/contexts/bank"
import { natwest } from "@src/shared/indexers/natwest"
import { Indexer } from "types/bank"

interface Props {
  children?: JSX.Element | JSX.Element[] | undefined
}

interface State {
  parsedCsvFile: ParsedCsvEntry[]
  indexer: Indexer
}

class App extends Component<Props, State> {
  state = {
    parsedCsvFile: [],
    indexer: natwest,
  }

  private setParsedCsv(parsedCsvFile: ParsedCsvEntry[]): void {
    this.setState({ parsedCsvFile })
  }

  private setIndexer(indexer: Indexer): void {
    this.setState({ indexer })
  }

  render(): JSX.Element {
    const csvProviderArgs = {
      setParsedCsv: this.setParsedCsv.bind(this),
      parsedCsvFile: this.state.parsedCsvFile,
    }
    const bankProviderArgs = {
      indexer: this.state.indexer,
      setIndexer: this.setIndexer.bind(this),
    }
    return (
      <CSVProvider value={csvProviderArgs}>
        <BankProvider value={bankProviderArgs}>
          <Layout>{this.props.children}</Layout>
        </BankProvider>
      </CSVProvider>
    )
  }
}

export default App
