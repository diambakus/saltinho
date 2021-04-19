import { Container, Grid, Paper, TextField, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myAxios } from '../../../Backend'
import { Consumer, consumerDefault, NIF } from '../../../Types'
import { toDateFormat } from '../../../Utilities'

const styles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex'
    },
    paperContent: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            padding: theme.spacing(3)
        },
        alignItems: 'center'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bolder',
        fontSize: 'larger'
    },
    row: {
        display: 'flex',
        alignItems: 'center'
    },
    schedule: {
        marginTop: theme.spacing(1)
    },
    label: {
        fontSize: 'small'
    }
}))

const ConsumerView = () => {
    const classes = styles()
    let { id } = useParams()
    const [consumer, setConsumer] = useState<Consumer>(consumerDefault)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        let canceled: boolean = false
        console.log(`Output: ${id}`)
        myAxios.get<Consumer>(`consumers/${id}`).then(response => {
            setLoading(true)
            if (!canceled) {
                setConsumer(response.data)
                setLoading(false)
            }
        })
        return () => { canceled = true }
    }, [])

    const basicDisplay = () => {
        return <Fragment>
            <Grid container spacing={2} className={classes.row}>
                <Grid container spacing={2} item xs={12} sm={12} md={12}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant='body1' color='primary' className={classes.label}>
                            {consumer.tax.type === NIF ? 'Nome completo: ' : 'Nome da organização: '}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant='body2' color='inherit'>
                            {consumer.fullname}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant='body1' color='primary' className={classes.label}>
                            {consumer.tax.type === NIF ? 'Data de nascimento: ' : 'Data de registo: '}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Typography variant='body2' color='inherit'>
                            {toDateFormat(consumer.birthdate)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} item xs={12} sm={12} md={12}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant='body1' color='primary' className={classes.label}>
                            {consumer.tax.type === NIF ? 'NIF: ' : 'NIPC: '}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant='body2' color='inherit'>
                            {consumer.tax.identifier}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    }
    const contactDisplay = () => {
        return (
            <Fragment>
                <Grid container spacing={2} className={classes.row}>
                    <Grid container spacing={2} item xs={12} sm={12} md={12}>
                        <Grid item container style={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item xs={12} sm={12} md={3}>
                                <Typography variant='body1' color='primary' className={classes.label}>Número de telefone</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography variant='body2'>{consumer.telephone}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item xs={12} sm={3} md={3}>
                                <Typography variant='body1' color='primary' className={classes.label}>E-mail</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Typography variant='body2'>{consumer.email}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }

    const addressDisplay = () => {
        return (
            <Fragment>
                <Grid container spacing={2} className={classes.row}>
                    <Grid container spacing={2} item xs={12} sm={12} md={12}>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' label='Rua' value={consumer.address.street}
                                disabled InputProps={{ disableUnderline: true }} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' label='Número' value={consumer.address.number}
                                disabled InputProps={{ disableUnderline: true }} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' label='Bairro' value={consumer.address.district}
                                disabled InputProps={{ disableUnderline: true }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} item xs={12} sm={12} md={12}>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' label='Cidade' value={consumer.address.city} disabled InputProps={{ disableUnderline: true }} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' label='Caixa postal' value={consumer.address.zipcode}
                                disabled InputProps={{ disableUnderline: true }} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' label='País' value='Guiné-Bissau'
                                disabled InputProps={{ disableUnderline: true }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }

    return (<Container maxWidth='md' className={classes.root}>
        <Paper className={classes.paperContent}>
            <div className={classes.title}>Confira dados inseridos antes de salvar</div>
            {basicDisplay()}
            {contactDisplay()}
            {addressDisplay()}
        </Paper>
    </Container>
    )
}

export default ConsumerView