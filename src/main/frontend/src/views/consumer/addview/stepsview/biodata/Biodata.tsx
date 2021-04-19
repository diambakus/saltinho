import DateFnsUtils from '@date-io/date-fns'
import { Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Theme } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment, useState } from 'react'
import { Consumer, NIF, NIPC } from '../../../../../Types'

const styles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            padding: theme.spacing(3)
        }
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bolder',
        fontSize: 'larger'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    schedule: {
        marginTop: theme.spacing(0)
    },
    selectTax: {
        minWidth: 120
    }
}))

interface ComponentProps {
    consumer: Consumer
    setConsumer: (consumer: Consumer) => void
    consumerType: string
    setConsumerType: (consumerType: string) => void
}

const Biodata = ({ consumer, consumerType, setConsumer, setConsumerType }: ComponentProps) => {
    const classes = styles()
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    const handleDate = (date: Date | null) => {
        setSelectedDate(date)
        setConsumer({ ...consumer, birthdate: (!!selectedDate ? selectedDate.getTime() : 0) })
    }

    const selectConsumer = () => {
        return (
            <Fragment>
                <FormControl>
                    <FormLabel component='legend'>Escolha o tipo de consumidor que será registado</FormLabel>
                    <RadioGroup aria-label='consumerType' name='consumerType' value={consumerType} onChange={e => setConsumerType(e.target.value)}>
                        <FormControlLabel value={NIF} control={<Radio />} label='Pessoa física' />
                        <FormControlLabel value={NIPC} control={<Radio />} label='Pessoa coletiva (empresas e institutos)' />
                    </RadioGroup>
                </FormControl>
            </Fragment>
        )
    }

    const civilInfo = () => {
        return <Fragment>
            <Grid item container spacing={2}>
                <Grid item xs={12} sm={8} md={8}>
                    <TextField variant='outlined' fullWidth margin='dense' required label={consumerType === NIF ? 'Nome completo' : 'Nome oficial'} value={consumer.fullname}
                        onChange={e => setConsumer({ ...consumer, fullname: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin='normal'
                            label={consumerType === NIF ? 'Data de nascimento' : 'Data de registo'}
                            format='dd/MM/yyyy'
                            value={selectedDate}
                            id='install-date'
                            onChange={handleDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                            className={classes.schedule}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
        </Fragment>
    }

    const financialInfo = () => {
        return <Fragment>
            <Grid item container spacing={2}>
                <Grid item xs={2} sm={2} md={2}>
                    <FormControl className={classes.selectTax}>
                        <InputLabel id='taxType'>Tipo</InputLabel>
                        <Select id='taxType-select' labelId='taxType' fullWidth value={consumer.tax.type} defaultValue={consumerType === NIF ? NIF : NIPC}
                            onChange={e => setConsumer({ ...consumer, tax: { ...consumer.tax, type: e.target.value as string } })}>
                            <MenuItem value={'NIF'}>NIF</MenuItem>
                            <MenuItem value={'NIPC'}>NIPC</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={10} sm={10} md={4}>
                    <TextField required label='Número de identificador' value={consumer.tax.identifier} onChange={e => setConsumer({ ...consumer, tax: { ...consumer.tax, identifier: e.target.value as string } })} />
                </Grid>
            </Grid>
        </Fragment>
    }

    return (<Container maxWidth='md'>
        <Paper className={classes.root}>
            <div className={classes.title}>Dados de identificação</div>
            <Grid container spacing={2} className={classes.wrapper}>
                {selectConsumer()}
                {civilInfo()}
                {financialInfo()}
            </Grid>
        </Paper>
    </Container>
    )
}

export default Biodata