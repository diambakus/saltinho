import { Container, makeStyles, Theme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { myAxios } from '../../../Backend'
import Page from '../../../components/Page'
import { Counter, counterInit, Reading } from '../../../types/Counter'
import CounterDetails from './CounterDetails'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        minHeight: '100%',
        padding: theme.spacing(3),
    },
}))

const CounterView = () => {
    const classes = styles()
    const [counter, setCounter] = useState<Counter>(counterInit)
    const [loading, setLoading] = useState<boolean>(false)
    let { id } = useParams()

    useEffect(() => {
        let canceled: boolean = false
        myAxios.get<Counter>(`counters/${id}`).then(response => {
            if (!canceled) {
                setLoading(true)
                setCounter(response.data)
                setLoading(false)
            }
        })
        return () => { canceled = true }
    }, [])

    return (<Page title={`Contador n° série ${counter.refnumber} - detalhes`} className={classes.root}>
        <Container maxWidth={false}>
            <CounterDetails counter={counter} setCounter={setCounter} />
        </Container>
    </Page>
    )
}

export default CounterView