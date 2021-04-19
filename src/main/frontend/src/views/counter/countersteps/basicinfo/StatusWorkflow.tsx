import { Container, makeStyles, Paper, Step, StepButton, Stepper, Theme, Typography } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { Counter, STATUSES } from '../../../../types/Counter'
import Title from '../../../../utils/Title'

interface ComponentProps {
    counter: Counter
    setCounter: (counter: Counter) => void
}

const styles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
    },
    stepper: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    title: {
        paddingTop: theme.spacing(2)
    }
}))

export default function ({ counter, setCounter }: ComponentProps) {
    const classes = styles()
    const [activeStep, setActiveStep] = useState<number>(counter.status)

    useEffect(() => {
        let canceled: boolean = false
        if (!canceled)
            setCounter({ ...counter, status: activeStep })
        return () => { canceled = true }
    }, [])

    const getStepContent = (status: number): string => {
        switch (status) {
            case 0:
                return 'Contador desligado'
            case 1:
                return 'Contador ligado'
            case 2:
                return 'Contador ativado'
            case 3:
                return 'Contador suspenso'
            default:
                return 'Status desconhecido'

        }
    }

    const handleStep = (index: number) => () => {
        if ((index === 0) && ((counter.status === 1) || (counter.status === 3)))
            setActiveStep(index)
        else if ((index === 1) && (counter.status === 0))
            setActiveStep(index)
        else if ((index === 2) && ((counter.status === 1) || (counter.status === 3)))
            setActiveStep(index)
        else if ((index === 3) && (counter.status === 2))
            setActiveStep(index)
    }

    return (
        <Fragment>
            <Container component={Paper}>
                <div className={classes.title}><Title>Estado do contador</Title></div>
                <Stepper className={classes.stepper} alternativeLabel nonLinear activeStep={activeStep}>
                    {STATUSES.map((label, index) => (
                        <Step key={index}>
                            <StepButton onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Container>
        </Fragment>
    )
}
