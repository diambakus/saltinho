import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment } from 'react'
import { toDateFormat } from '../../../Utilities'
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined'
import { NavLink as RouterLink } from 'react-router-dom'
import { Counter } from '../../../types/Counter'
import CommonTable, { ColumnDefinitionType } from '../../../utils/CommonTable'

interface ComponentProps {
    counters: Counter[]
    title: string
}

interface CounterUI extends Pick<Counter, 'refnumber'> {
    indice: number
    type: string
    date: string
    status: string
    action: JSX.Element
}

const styles = makeStyles((theme: Theme) => ({
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2)
    }
}))

const CountersTable = ({ counters, title }: ComponentProps) => {
    const classes = styles()

    const getHeaders = (): ColumnDefinitionType<CounterUI, keyof CounterUI>[] => {
        return [
            {
                key: 'indice',
                name: 'Número',
                width: 50
            },
            {
                key: 'date',
                name: 'Data de instalação',
                width: 80
            },
            {
                key: 'type',
                name: 'Tipo',
                width: 100
            },
            {
                key: 'status',
                name: 'Status',
                width: 100
            },
            {
                key: 'action',
                name: 'Atividade',
                width: 80
            }
        ]
    }

    const getType = (indx: number): string => {
        switch (indx) {
            case 0:
                return 'desativado'
            case 1:
                return 'ativado'
            case 2:
                return 'ligado'
            case 3:
                return 'suspenso'
            default:
                return '?'
        }
    }

    const buildLink = (id: number) => {
        return <Tooltip title='Editar detalhes'>
            <IconButton component={RouterLink} to={`./${id}`}>
                <PostAddOutlinedIcon /></IconButton></Tooltip>
    }

    const getData = (): CounterUI[] => {
        let items: CounterUI[] = []
        counters.map((counter, index) => {
            items[index] = {
                indice: index + 1,
                date: toDateFormat(counter.installationDate),
                type: (counter.type === 1) ? 'Água' : 'Electricidade',
                status: getType(counter.status).toUpperCase(),
                action: buildLink(counter.id),
                refnumber: counter.refnumber
            }
        })
        return items
    }

    return (<Fragment>
        <CommonTable headers={getHeaders()} data={getData()} />
    </Fragment>
    )
}

export default CountersTable