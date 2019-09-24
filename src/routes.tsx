import React from "react"
import { RouteProps } from "react-router"
import Home from "@src/shared/pages/home"
import Reports from "@src/shared/pages/reports"
import Layout from "@src/layout"
import ReportPage from "@src/shared/pages/report"

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
    render: function ReportsRoute(): JSX.Element {
      return (
        <Layout>
          <Reports />
        </Layout>
      )
    },
  },
  {
    path: "/reports/:report",
    exact: true,
    render: function ReportsComponentRoute(): JSX.Element {
      return (
        <Layout>
          <ReportPage />
        </Layout>
      )
    },
  },
]

export default routes
