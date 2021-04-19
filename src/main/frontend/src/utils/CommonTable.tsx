import styles from './CommonTable.jss'
import { Paper, Table, TableContainer } from '@material-ui/core'
import React from 'react'
import TableHeader from './TableHeader'
import TableRows from './TableRows'

export interface ColumnDefinitionType<T, K extends keyof T> {
    key: K
    name: string
    width?: number
}

interface ComponentProps<T, K extends keyof T> {
    data: Array<T>
    headers: Array<ColumnDefinitionType<T, K>>
}

const CommonTable = <T, K extends keyof T>({ data, headers }: ComponentProps<T, K>) => {
    const classes = styles()
    return (<TableContainer component={Paper}>
        <Table size='small' className={classes.table}>
            <TableHeader headers={headers} />
            <TableRows data={data} headers={headers} />
        </Table>
    </TableContainer>)
}

export default CommonTable