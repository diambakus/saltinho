import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.jss'
import TopBar from './TopBar'

const MainLayout = () => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <TopBar />
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

export default MainLayout
