import React, { ChangeEvent, Fragment, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import styles from './Results.jss'
import { Consumer } from '../../../Types'
import { NavLink as RouterLink } from 'react-router-dom'
import CommonTable, { ColumnDefinitionType } from '../../../utils/CommonTable'

interface ComponentProps {
  consumers: Consumer[]
}

interface ConsumerUI extends Pick<Consumer, 'fullname' | 'telephone' | 'email'> {
  taxNumber: string
  action: JSX.Element
  indice: number
}

const Results = ({ consumers }: ComponentProps) => {
  const classes = styles()
  const [selectedConsumerIds, setSelectedConsumerIds] = useState<number[]>([]);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const getHeaders = (): ColumnDefinitionType<ConsumerUI, keyof ConsumerUI>[] => {
    return [
      {
        key: 'indice',
        name: 'Número',
        width: 50
      },
      {
        key: 'fullname',
        name: 'Nome',
        width: 150
      },
      {
        key: 'taxNumber',
        name: 'Número fiscal',
        width: 100
      },
      {
        key: 'telephone',
        name: 'Número de telefone',
        width: 100
      },
      {
        key: 'email',
        name: 'Correio eletrônico',
        width: 100
      },
      {
        key: 'action',
        name: 'Atividade',
        width: 80
      }
    ]
  }


  const buildLink = (id: number) => {
    return <Tooltip title='editar detalhes'>
      <IconButton component={RouterLink} to={`./${id}`}><EditIcon /></IconButton>
    </Tooltip>
  }

  const getData = (): ConsumerUI[] => {
    let items: ConsumerUI[] = []
    consumers.map((consumer, index) => {
      items[index] = {
        indice: index + 1,
        fullname: consumer.fullname,
        taxNumber: consumer.tax.identifier,
        telephone: consumer.telephone,
        email: consumer.email,
        action: buildLink(consumer.id)
      }
    })
    return items
  }

  return (<Fragment>
    <CommonTable headers={getHeaders()} data={getData()} />
  </Fragment>
  )
}

export default Results
