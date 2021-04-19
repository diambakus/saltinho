import { Container, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import Page from '../../../components/Page'
import FormAddCounter from './FormAddCounter'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        minHeight: '100%',
        padding: theme.spacing(3),
    }
}))

const AddCounter = () => {
    const classes = styles()
    return (
        <Page title='Adicionar contador' className={classes.root}>
            <Container maxWidth={false}>
                <FormAddCounter />
            </Container>
        </Page>
    )
}

export default AddCounter