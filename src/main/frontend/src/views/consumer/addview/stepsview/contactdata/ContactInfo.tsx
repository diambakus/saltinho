import { Container, Grid, Paper, TextField, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment, useState } from 'react'
import { Consumer } from '../../../../../Types'

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
    }
}))

interface ComponentProps {
    consumer: Consumer
    setConsumer: (consumer: Consumer) => void
}

const ContactInfo = ({ consumer, setConsumer }: ComponentProps) => {
    const classes = styles()

    const contactInput = () => {
        return (
            <Fragment>
                <Grid container spacing={2} className={classes.row}>
                    <Grid container spacing={2} item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={3} md={3}>
                            <TextField variant='standard' fullWidth margin='dense' required label='Número de telefone' value={consumer.telephone}
                                onChange={e => setConsumer({ ...consumer, telephone: e.target.value })} />
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <TextField variant='standard' fullWidth margin='dense' label='E-mail' value={consumer.email}
                                onChange={e => setConsumer({ ...consumer, email: e.target.value })} />
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }

    const addressInput = () => {
        return (
            <Fragment>
                <Grid container spacing={2} className={classes.row}>
                    <Grid container spacing={2} item xs={12} sm={12} md={12}>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' required label='Rua' value={consumer.address.street}
                                onChange={e => setConsumer({ ...consumer, address: { ...consumer.address, street: e.target.value } })} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' required label='Número' value={consumer.address.number}
                                onChange={e => setConsumer({ ...consumer, address: { ...consumer.address, number: e.target.value } })} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' required label='Bairro' value={consumer.address.district}
                                onChange={e => setConsumer({ ...consumer, address: { ...consumer.address, district: e.target.value } })} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} item xs={12} sm={12} md={12}>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' required label='Cidade' value={consumer.address.city}
                                onChange={e => setConsumer({ ...consumer, address: { ...consumer.address, city: e.target.value } })} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField variant='standard' fullWidth margin='dense' required label='Caixa postal' value={consumer.address.zipcode}
                                onChange={e => setConsumer({ ...consumer, address: { ...consumer.address, zipcode: e.target.value } })} />
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
            <div className={classes.title}>Informações de contato e endereço de cobrança</div>
            {contactInput()}
            {addressInput()}
        </Paper>
    </Container>
    )
}

export default ContactInfo