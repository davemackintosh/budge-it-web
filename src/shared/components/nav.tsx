import React, { useState } from "react"
import { MainNav } from "@src/shared/theme/nav"
import { Link } from "react-router-dom"
import { ReportsMenu } from "@src/shared/components/reports-menu"

export const NavDrawer = (): JSX.Element => {
  const [reportsMenuHover, setHoverState] = useState(false)

  const reportMenu = reportsMenuHover ? <ReportsMenu /> : null

  return (
    <MainNav>
      <Link
        to="/reports"
        title="See what financial reports we have to offer to better understand your spending"
        onMouseEnter={(): void => setHoverState(true)}
        onMouseLeave={(): void => setHoverState(false)}
      >
        Reports
        {reportMenu}
      </Link>
    </MainNav>
  )
}

export default NavDrawer
