import React, { useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core'
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  LocalMallOutlined as LocalMallOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  PersonAddOutlined as PersonAddOutlinedIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  SpeedOutlined as SpeedOutlinedIcon,
  GroupSharp as GroupSharpIcon
} from '@material-ui/icons'
import NavItem from './NavItem'
import styles from './index.jss'


const user = {
  avatar: '/static/images/avatars/avatar-unknown.png',
  jobTitle: 'Agente de vendas',
  name: 'Prenome Sobrenome'
}

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: PeopleOutlineOutlinedIcon,
    title: 'Customers'
  },
  {
    href: '/app/consumers',
    icon: GroupSharpIcon,
    title: 'Consumidores'
  },
  {
    href: '/app/counters',
    icon: SpeedOutlinedIcon,
    title: 'Contadores'
  },
  {
    href: '/app/products',
    icon: LocalMallOutlinedIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: PersonOutlinedIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: PersonAddOutlinedIcon,
    title: 'Register'
  }
]

const NavBar = ({ onMobileClose, openMobile }: any) => {
  const classes = styles()
  const location = useLocation()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
}

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
}

export default NavBar
