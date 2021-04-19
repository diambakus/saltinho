import { Container, Grid, Paper, TextField, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment, useState } from 'react'
import { Consumer, NIF } from '../../../../../Types'
import { toDateFormat } from '../../../../../Utilities'

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

interface ComponentProps {
    consumer: Consumer
    consumerType: string
}

const Confirmation = ({ consumer, consumerType }: ComponentProps) => {
    const classes = styles()

    const basicDisplay = () => {
        return <Fragment>
            <Grid container spacing={2} className={classes.row}>
                <Grid container spacing={2} item xs={12} sm={12} md={12}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant='body1' color='primary' className={classes.label}>
                            {consumerType === NIF ? 'Nome completo: ' : 'Nome da organização: '}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant='body2' color='inherit'>
                            {consumer.fullname}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant='body1' color='primary' className={classes.label}>
                            {consumerType === NIF ? 'Data de nascimento: ' : 'Data de registo: '}
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
                            {consumerType === NIF ? 'NIF: ' : 'NIPC: '}
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

    return (<Container maxWidth='md' >
        <Paper className={classes.root}>
            <div className={classes.title}>Confira dados inseridos antes de salvar</div>
            {basicDisplay()}
            {contactDisplay()}
            {addressDisplay()}
        </Paper>
    </Container>
    )
}

export default Confirmation