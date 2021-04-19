import { Grid, Paper, TextField, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment } from 'react'
import { Address } from '../types/Address'
import Title from './Title'


const styles = makeStyles((theme: Theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

interface ComponentProps {
    title: string
    address: Address
    setAddress: (address: Address) => void
}

const MyAddress = ({ title, address, setAddress }: ComponentProps) => {
    const classes = styles()
    return (
        <Fragment>
            <div className={classes.title}><Title>{title}</Title></div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField required id='street' name='street' label='Rua' fullWidth value={address.street}
                        onChange={e => setAddress({ ...address, street: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id='number' name='number' label='Número da casa' fullWidth value={address.number}
                        onChange={e => setAddress({ ...address, number: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id='district' name='district' label='Bairro' fullWidth value={address.district}
                        onChange={e => setAddress({ ...address, district: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id='city' name='city' label='Cidade' fullWidth value={address.city}
                        onChange={e => setAddress({ ...address, city: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id='zipcode' name='zipcode' label='Código postal' fullWidth value={address.zipcode}
                        onChange={e => setAddress({ ...address, zipcode: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id='country' name='country' label='País' fullWidth value={address.country}
                        disabled InputProps={{ disableUnderline: true }} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField id='description' name='description' label='Nota de referência' fullWidth value={address.description}
                        onChange={e => setAddress({ ...address, description: e.target.value })} />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default MyAddress