import React from "react"
import Layout from "@src/layout"

interface Props {
  children?: JSX.Element | JSX.Element[] | undefined
}

function App(props: Props): JSX.Element {
  return <Layout>{props.children}</Layout>
}

export default App
