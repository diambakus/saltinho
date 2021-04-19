import React from 'react'
import {
  Box,
  Container,
  makeStyles,
  Theme
} from '@material-ui/core'
import Page from '../../../components/Page'
import Notifications from './Notifications'
import Password from './Password'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    minHeight: '100%',
    padding: theme.spacing(3),
  },
}))

const SettingsView = () => {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title='Settings'
    >
      <Container maxWidth='lg'>
        <Notifications />
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </Page>
  )
}

export default SettingsView
