import React, { useState } from 'react'
import {
  Box,
  Container
} from '@material-ui/core'
import Page from '../../../components/Page'
import Results from './Results'
import Toolbar from './Toolbar'
import data from './data'
import styles from './index.jss'

const CustomerListView = () => {
  const classes = styles()
  const [customers] = useState(data)

  return (
    <Page
      className={classes.root}
      title='Customers'
    >
      <Container maxWidth={false}>
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Clientes</p>
      </Container>
    </Page>
  )
}

export default CustomerListView;
