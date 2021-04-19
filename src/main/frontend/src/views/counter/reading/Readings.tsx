import { Container, Grid, Paper } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { Reading } from '../../../types/Counter'
import { getMonth, toDateFormat } from '../../../Utilities'
import CommonTable, { ColumnDefinitionType } from '../../../utils/CommonTable'
import DateInput from '../../../utils/DateInput'
import styles from './Readings.jss'

interface ComponentProps {
    readings: Reading[]
    counterType: number
}

interface ReadingUI extends Pick<Reading, 'value'> {
    date: string
    indice: number
    month: string
}

const Readings = ({ readings, counterType }: ComponentProps) => {
    const classes = styles()
    const [date, setDate] = useState<Date | null>(new Date())
    const [searchParam, setSearchParam] = useState<number>(0)

    const handleDate = (date: Date | null) => {
        setDate(date)
        setSearchParam(!!date ? date.getTime() : 0)
    }

    const getHeaders = (): ColumnDefinitionType<ReadingUI, keyof ReadingUI>[] => {
        return [
            {
                key: 'indice',
                name: 'Número',
                width: 80
            },
            {
                key: 'date',
                name: 'Data de leitura',
                width: 100
            },
            {
                key: 'value',
                name: `Consumo (em ${counterType === 1 ? 'm³' : 'kW'})`,
                width: 150
            },
            {
                key: 'month',
                name: 'Mês de referência',
                width: 80
            }
        ]
    }

    const getData = (): ReadingUI[] => {
        let items: ReadingUI[] = []
        readings.map((reading, index) => {
            items[index] = {
                value: reading.value,
                indice: index + 1,
                date: toDateFormat(reading.date),
                month: getMonth(toDateFormat(reading.date))
            }
        })
        return items
    }

    return (<Fragment>
        <Container component={Paper} maxWidth={false}>
            <Grid container style={{ paddingBottom: '16px' }}>
                <Grid item xs={12} sm={12} md={12} container>
                    <Grid item xs={12} sm={12} md={12}>
                        <DateInput handleDate={handleDate} selected={date} label={'Data de leitura'} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={12}>
                    <CommonTable headers={getHeaders()} data={getData()} />
                </Grid>
            </Grid>
        </Container>
    </Fragment>
    )
}

export default Readings