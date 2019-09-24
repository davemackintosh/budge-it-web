import React, { Fragment } from "react"
import NavDrawer from "@src/shared/components/nav"

const Layout = props => (
  <Fragment>
    <NavDrawer />
    <main>{props.children}</main>
  </Fragment>
)
