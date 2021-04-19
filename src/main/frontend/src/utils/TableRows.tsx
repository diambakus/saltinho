import { makeStyles, TableBody, TableCell, TableRow, Theme } from '@material-ui/core';
import React, { Fragment } from 'react'
import { ColumnDefinitionType } from './CommonTable';

interface ComponentProps<T, K extends keyof T> {
    data: Array<T>
    headers: Array<ColumnDefinitionType<T, K>>
}

const styles = makeStyles((theme: Theme) => ({
    tableCell: {
        border: `1px solid ${theme.palette.primary.main}`,
        padding: 0,
    },
}))

export default function <T, K extends keyof T>({ data, headers }: ComponentProps<T, K>) {
    const classes = styles()
    const items = data.map((item, index) => {
        return (
            <TableRow key={`row-${index}`}>
                {
                    headers.map((header, indice) => {
                        return (
                            <TableCell component='td' align='center' key={`cell-${indice}`} className={classes.tableCell}>
                                {item[header.key]}
                            </TableCell>
                        )
                    })
                }
            </TableRow>
        )
    })
    return (
        <Fragment>
            <TableBody>
                {items}
            </TableBody>
        </Fragment>
    )
}