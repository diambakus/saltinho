import { Button, Container, Grid, Paper, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import Page from '../../../components/Page'
import CountersTable from './CountersTable'
import { myAxios } from '../../../Backend'
import { NavLink as RouterLink } from 'react-router-dom'
import SearchCounter from './SearchCounter'
import { Counter } from '../../../types/Counter'


const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        minHeight: '100%',
        padding: theme.spacing(3),
    },
    topBox: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
    },
    container: {
        marginTop: 12
    },
    addButton: {
        marginRight: theme.spacing(2)
    }
}))

const Counters = () => {
    const classes = styles()
    const [counters, setCounters] = useState<Counter[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        let canceled: boolean = false
        setLoading(true)
        myAxios.get<Counter[]>('counters').then(response => {
            if (!canceled) {
                setCounters(response.data)
                setLoading(false)
            }
        }).catch(err => {
            console.error('CounterListView.tsx: ' + err)
            setError(err)
            setLoading(false)
        })
        return () => { canceled = true }
    }, [])


    const table = (counters: Counter[], loading: boolean) => {
        if (loading) return
        else
            return <CountersTable title='Lista de contadores de luz' counters={counters} />
    }

    return (
        <Page className={classes.root} title='Contadores'>
            <Container maxWidth={false} component={Paper} className={classes.container}>
                <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid container item md={12} sm={12} xs={12} className={classes.topBox}>
                        <Button variant='contained' color='primary' size='small' className={classes.addButton}
                            component={RouterLink} to='/app/counters/create'>
                            Novo Contador
                        </Button>
                        <SearchCounter />
                    </Grid>
                    <Grid item sm={12} md={12} xs={12}>
                        {table(counters, loading)}
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Counters