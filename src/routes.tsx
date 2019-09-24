import { RouteProps } from "react-router"
import Home from "@src/shared/pages/home"
import Reports from "@src/shared/pages/reports"

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/reports",
    exact: true,
    component: Reports,
  },
]

export default routes
