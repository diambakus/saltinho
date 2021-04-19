import 'date-fns'
import { Button, Checkbox, Container, Divider, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import styles from './FormAddCounter.jss'
import { useNavigate, NavLink as RouterLink } from 'react-router-dom'
import { myAxios } from '../../../Backend'
import { Counter, counterInit } from '../../../types/Counter'
import DateInput from '../../../utils/DateInput'
import MyAddress from '../../../utils/MyAddress'
import { AddressInit, Address } from '../../../types/Address'
import Title from '../../../utils/Title'


const FormAddCounter = () => {
    const classes = styles()
    const [counter, setCounter] = useState<Counter>(counterInit)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
    const [dateChange, setDateChange] = useState<boolean>(false)
    const [address, setAddress] = useState<Address>(AddressInit)
    const [boxChecked, setBoxChecked] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        let canceled: boolean = false
        if (isSuccess && (!canceled)) {
            setIsSuccess(false)
            let id: number = counter.id
            if (id > 0)
                navigate(`/app/counters`)
        }
        return () => { canceled = true }
    }, [isSuccess])

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled) {
            setCounter({ ...counter, installationDate: (selectedDate === null) ? null : selectedDate.getTime() })
            setDateChange(true)
        }
        return () => { canceled = true }
    }, [selectedDate])

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled)
            setCounter({ ...counter, status: boxChecked ? 1 : 0 })
        return () => { canceled = true }
    }, [boxChecked])

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled)
            setCounter({ ...counter, address: address })
        return () => { canceled = true }
    }, [address])

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target
        setCounter({ ...counter, [name]: value })
    }

    const handleDate = (date: Date | null) => {
        setSelectedDate(date)
    }

    function handleSubmit() {
        myAxios.post('counters', counter).then(response => {
            setCounter(response.data)
            setIsSuccess(true)
        }).catch(err => {
            console.log('Error has happened: ' + err)
            setIsSuccess(false)
        })
    }

    const satisfies = (): boolean => {
        return (dateChange === true) && !!counter.type
    }

    const installData = () => {
        return (
            <Fragment>
                <div style={{ display: 'flex', justifyContent: 'center' }}><Title>Dados básicos de instalação</Title></div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center', }}>
                        <DateInput handleDate={handleDate} selected={selectedDate} label={'Data de instalação'} />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ paddingBottom: 0 }}>
                        <TextField id='refnumber' value={counter.refnumber} label='Número de contador' variant='standard' name='refnumber' fullWidth onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ paddingBottom: 0 }}>
                        <InputLabel id='type-label'>Tipo</InputLabel>
                        <Select id='type' labelId='type-label' value={counter.type} fullWidth onChange={event => setCounter({ ...counter, type: event.target.value as number })}>
                            <MenuItem value={1}>Água</MenuItem>
                            <MenuItem value={2}>Eletricidade</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={12} style={{ paddingBottom: 2 }}>
                        <TextField id='description' value={counter.description} label='Descrição' variant='standard' name='description' fullWidth onChange={handleChange} />
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <Container maxWidth={false} component={Paper}>
                <form noValidate autoComplete='off'>
                    <Grid container spacing={3}>
                        <Grid container item xs={12} sm={12}>
                            <Typography variant='h4' component='body' color='primary' style={{
                                display: 'flex', justifyContent: 'center',
                                overflowWrap: 'break-word'
                            }}> Registar contador </Typography>
                        </Grid>
                        <Grid item container xs={12} sm={12} spacing={3} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item xs={12} sm={6}>
                                <Grid item>{installData()}</Grid>
                                <Grid item style={{ marginTop: '64px' }}><MyAddress title='Endereço de instalação' address={address} setAddress={setAddress} /></Grid>
                            </Grid>
                            <Grid item sm={1} style={{ paddingRight: 0 }}><Divider orientation='vertical' /></Grid>
                            <Grid item xs={12} sm={5}>
                                <p className={classes.paragraph}>Nota: os campos indicados com * são de preenchimento obrigatório. <br />
                                    O campo <u>Nota de referência</u> pode ser utilizado para explicar a localização geográfica de habitação (ou
                                    edifício empresarial) na ausência de um endereço bem definido.</p>
                                <FormControlLabel
                                    control={<Checkbox checked={boxChecked} onChange={e => setBoxChecked(e.target.checked)} inputProps={{ 'aria-label': 'primary checkbox' }} />}
                                    label='Ao clicar ativar o checkbox confirmo o registo e ativação do contador.'
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.button}>
                            <Button color='default' variant='contained' size='small' component={RouterLink} to='/app/counters'>Cancelar</Button>
                            <Button color='primary' variant='contained' size='small' onClick={handleSubmit} disabled={!satisfies()}>Ok</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Fragment>
    )
}

export default FormAddCounter