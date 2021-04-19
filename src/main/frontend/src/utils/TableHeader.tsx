import { makeStyles, TableCell, TableHead, TableRow, Theme } from '@material-ui/core'
import React, { Fragment } from 'react'
import { ColumnDefinitionType } from './CommonTable'

const styles = makeStyles((theme: Theme) => ({
    header: {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
    }
}))

interface ComponentProps<T, K extends keyof T> {
    headers: Array<ColumnDefinitionType<T, K>>
}

export default function <T, K extends keyof T>({ headers }: ComponentProps<T, K>) {
    const classes = styles()
    const items = headers.map((item, index) => {
        return (
            <TableCell component='th' align='center' key={`headCell-${index}`}
                className={`${classes.header} width: ${item.width}`}>{item.name}</TableCell>
        )
    })
    return (
        <Fragment>
            <TableHead><TableRow>{items}</TableRow></TableHead>
        </Fragment>
    )
}