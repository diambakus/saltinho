import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import TopBar from './TopBar'
import styles from './index.jss'

const DashboardLayout = () => {
  const classes = styles()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
