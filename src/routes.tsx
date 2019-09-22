import { RouteProps } from "react-router"
import Home from "@components/home/home"

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
]

export default routes
