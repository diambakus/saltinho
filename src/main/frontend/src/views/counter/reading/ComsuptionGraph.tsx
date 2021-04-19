import { Container, Paper } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import theme from '../../../theme'
import { IData } from '../../../Types'
import { Counter, Reading } from '../../../types/Counter'
import { monthInitials, toDateFormat } from '../../../Utilities'
import Chart from '../../../utils/Chart'

interface ComponentProps {
    readings: Reading[]
}

const ConsumptionGraph = ({ readings }: ComponentProps) => {

    const data = (): IData[] => {
        return readings.slice(0, readings.length < 12 ? readings.length : 12).map(reading => {
            return {
                value: reading.value,
                name: monthInitials(toDateFormat(reading.date))
            }
        })
    }

    return (<Fragment>
        <Container component={Paper}>
            <div style={{ paddingTop: theme.spacing(2) }}><Chart title={'Gráfico de consumo'} data={data()} /></div>
        </Container>
    </Fragment>)
}

export default ConsumptionGraph