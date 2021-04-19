import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Paper
} from '@material-ui/core'
import Page from '../../../components/Page'
import Results from './Results'
import styles from './index.jss'
import { Consumer } from '../../../Types'
import { myAxios } from '../../../Backend'
import { NavLink as RouterLink } from 'react-router-dom'

const ConsumerListView = () => {
  const classes = styles()
  const [consumers, setConsumers] = useState<Consumer[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let canceled: boolean = false
    setLoading(true)
    myAxios.get<Consumer[]>('consumers').then(response => {
      if (!canceled) {
        setConsumers(response.data)
        setLoading(false)
      }
    }).catch(err => {
      console.log('GET Consumers error: ')
      setLoading(false)
    })
    return () => { canceled = true }
  }, [])

  return (
    <Page
      className={classes.root}
      title='Customers'
    >
      <Container maxWidth={false} component={Paper}>
        <Grid container spacing={3} className={classes.container}>
          <Grid container item md={12} sm={12} xs={12} className={classes.topBox}>
            <Button
              color="primary"
              variant="contained"
              size='small'
              component={RouterLink}
              to='/app/consumers/create'
            >
              Registar Consumidor
        </Button>
          </Grid>
          <Grid item sm={12} md={12} xs={12}>
            <Results consumers={consumers} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default ConsumerListView
