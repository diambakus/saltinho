import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar
} from '@material-ui/core'
import Logo from '../../components/Logo'
import styles from '../DashboardLayout/TopBar.jss'

const TopBar = ({ className, ...rest }: any) => {
  const classes = styles()

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to='/'>
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string
}

export default TopBar
