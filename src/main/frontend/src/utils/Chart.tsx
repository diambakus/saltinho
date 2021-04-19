import { Container, makeStyles, Theme, useTheme } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IData } from '../Types'
import Title from './Title'

interface ComponentProps {
    title: string
    data: IData[]
}

const styles = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(2)
    }
}))

const Chart = ({ title, data }: ComponentProps) => {
    const classes = styles()
    const theme = useTheme()

    return (
        <Fragment>
            <Container>
                <Title>{title}</Title>
                <BarChart width={550} height={350} data={data} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray='5 5' />
                    <XAxis dataKey='name' padding={{ left: 20, right: 20 }} />
                    <YAxis />
                    <Tooltip />
                    <Bar label={false} dataKey='value' fill='#8884d8' barSize={10} />
                </BarChart>
            </Container>
        </Fragment>
    )
}

export default Chart



