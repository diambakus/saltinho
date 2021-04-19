import { Button, Container, Grid, InputAdornment, makeStyles, Paper, TextField, Theme } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { myAxios } from '../../../Backend'
import { Counter, Reading, readingInit } from '../../../types/Counter'
import { NumberFormatCustom } from '../../../types/Utilities'
import { shallowCopy } from '../../../Utilities'
import DateInput from '../../../utils/DateInput'

const styles = makeStyles((theme: Theme) => ({
    content: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            padding: theme.spacing(2),
            paddingLeft: 0
        },
    }
}))

interface ComponentProps {
    counter: Counter
    reading: Reading
    setReading: (reading: Reading) => void
    handleSubmit: () => void
}

const InsertReading = ({ counter, reading, setReading, handleSubmit }: ComponentProps) => {
    const classes = styles()
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled) {
            setReading({ ...reading, date: (selectedDate === null) ? null : selectedDate.getTime() })
        }
        return () => { canceled = true }
    }, [selectedDate])

    const handleDate = (date: Date | null) => {
        setSelectedDate(date)
    }

    return (<Fragment>
        <Container component={Paper} className={classes.content}>
            <Grid item xs={4} sm={12} md={4}>
                <TextField label='Inserir leitura' id='inserir-leitura-id'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>{counter.type === 1 ? 'm³' : 'kW'}</InputAdornment>,
                        inputComponent: NumberFormatCustom
                    }}
                    value={reading.value.toFixed(2)} onChange={e => setReading({ ...reading, value: parseFloat(e.target.value) })} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <DateInput handleDate={handleDate} selected={selectedDate} label={'Data de leitura'} />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
                <Button size='small' variant='contained' onClick={handleSubmit} color='primary'>Registar</Button>
            </Grid>
        </Container>
    </Fragment>
    )
}

export default InsertReading