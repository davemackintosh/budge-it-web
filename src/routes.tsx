import React from "react"
import { RouteProps } from "react-router"
import Home from "@src/shared/pages/home"
import Reports from "@src/shared/pages/reports"
import Layout from "@src/layout"

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    render: function HomeRoute(): JSX.Element {
      return (
        <Layout>
          <Home />
        </Layout>
      )
    },
  },
  {
    path: "/reports",
    exact: true,
    render: function HomeRoute(): JSX.Element {
      return (
        <Layout>
          <Reports />
        </Layout>
      )
    },
  },
]

export default routes
