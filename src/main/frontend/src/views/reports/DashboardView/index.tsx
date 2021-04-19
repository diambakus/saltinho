import React from 'react';
import {
  Container,
  Grid
} from '@material-ui/core'
import Page from '../../../components/Page'
import Budget from './Budget'
import LatestOrders from './LatestOrders'
import LatestProducts from './LatestProducts'
import Sales from './Sales'
import TasksProgress from './TasksProgress'
import TotalCustomers from './TotalCustomers'
import TotalProfit from './TotalProfit'
import TrafficByDevice from './TrafficByDevice'
import styles from './index.jss'

const Dashboard = () => {
  const classes = styles()

  return (
    <Page
      className={classes.root}
      title='Dashboard'
    >
      <Container maxWidth={false}>
        <p style={{ display: 'flex', justifyContent: 'center' }}>Dashboard</p>
      </Container>
    </Page>
  )
}

export default Dashboard
