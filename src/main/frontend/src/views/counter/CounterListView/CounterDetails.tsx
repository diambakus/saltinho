import { Container, Grid, makeStyles, Theme } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { myAxios } from '../../../Backend'
import { Counter, Reading, readingInit } from '../../../types/Counter'
import { shallowCopy } from '../../../Utilities'
import StatusWorkflow from '../countersteps/basicinfo/StatusWorkflow'
import ConsumptionGraph from '../reading/ComsuptionGraph'
import InsertReading from '../reading/InsertReading'
import Readings from '../reading/Readings'


const styles = makeStyles((theme: Theme) => ({
    backButton: {
        marginRight: theme.spacing(1)
    },
    register: {
        display: 'flex',
        '& > *': {
            padding: theme.spacing(2),
            paddingLeft: 0
        },
        alignItems: 'center'
    }
}))

interface ComponentProps {
    counter: Counter
    setCounter: (counter: Counter) => void
}

const CounterDetails = ({ counter, setCounter }: ComponentProps) => {
    const classes = styles()
    const [loading, setLoading] = useState<boolean>(false)
    const [readings, setReadings] = useState<Reading[]>([])
    const [reading, setReading] = useState<Reading>(readingInit)
    const [postOk, setPostOk] = useState<boolean>(false)

    const validCounter = () => !!counter && (counter.id > 0)
    useEffect(() => {
        let canceled: boolean = false
        if (!validCounter) return
        setLoading(true)
        myAxios.get<Reading[]>(`counters/${counter.id}/readings`).then(response => {
            if (!canceled) {
                setReadings(response.data)
                setLoading(false)
            }
        }).catch(error => {
            console.log(error)
            setLoading(false)
        })
        return () => { canceled = true }
    }, [counter.id])

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled && postOk) {
            let newList: Reading[] = []
            newList = readings.map(x => Object.assign({}, x))
            newList.push(reading)
            setReadings(newList)
            setReading(readingInit)
            setPostOk(false)
        }
        return () => { canceled = true }
    }, [postOk])

    const handleSubmit = () => {
        if (!validCounter) return
        myAxios.post(`counters/${counter.id}/readings`, reading).then(response => {
            setReading(response.data)
            if (response.status === 200)
                setPostOk(true)
        }).catch(error => {
            console.log(error)
        })
    }

    return (<Fragment>
        <Container maxWidth={false}>
            <Grid container spacing={2}>
                <Grid container item xs={12} sm={12} md={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={8}>
                        <ConsumptionGraph readings={readings} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        Shows last consuming
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} spacing={2}>
                    <Grid container item xs={12} sm={12} md={8}>
                        <InsertReading counter={counter} reading={reading} setReading={setReading} handleSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <StatusWorkflow counter={counter} setCounter={setCounter} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Readings readings={readings} counterType={counter.type} />
                </Grid>
            </Grid>
        </Container>
    </Fragment>
    )
}

export default CounterDetails