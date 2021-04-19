import { Button, Container, makeStyles, Step, StepLabel, Stepper, Theme, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myAxios } from '../../../Backend'
import { Consumer, consumerDefault, NIF } from '../../../Types'
import Biodata from './stepsview/biodata/Biodata'
import ContactInfo from './stepsview/contactdata/ContactInfo'
import Confirmation from './stepsview/display/Confirmation'
import StepNavigator from './stepsview/StepNavigator'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        minHeight: '100%',
        padding: theme.spacing(3),
        minWidth: '100%'
    },
    backButton: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}))

const DESCR: string[] = [
    'Dados básicos',
    'Endereço de cobrança e dados de contato',
    'Confirmar dados inseridos'
]

const AddConsumerView = () => {
    const classes = styles()
    const [activeStep, setActiveStep] = useState<number>(0)
    const [consumer, setConsumer] = useState<Consumer>(consumerDefault)
    const [consumerType, setConsumerType] = useState<string>(NIF)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const [postOk, setPostOk] = useState<boolean>(false)

    useEffect(() => {
        if (postOk)
            navigate('/app/consumers')
    }, [postOk])

    const getStepContent = () => {
        if (activeStep >= DESCR.length) return
        switch (activeStep) {
            case 0:
                return <Biodata consumer={consumer} consumerType={consumerType} setConsumer={setConsumer} setConsumerType={setConsumerType} />
            case 1:
                return <ContactInfo consumer={consumer} setConsumer={setConsumer} />
            case 2:
                return <Confirmation consumer={consumer} consumerType={consumerType} />
            default:
                return 'Unknown'
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlePrevious = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const basicProvided = (): boolean => {
        return activeStep === 0 && !!consumer.fullname && !!consumer.birthdate
    }

    const contactProvided = (): boolean => {
        return activeStep === 1 && !!consumer.telephone && !!consumer.address.street && !!consumer.address.district && !!consumer.address.city
    }

    const canContinue = () => {
        const basicInfoProvided: boolean = basicProvided()
        const contactInfoProvided: boolean = contactProvided()
        return basicInfoProvided || contactInfoProvided
    }

    const handleSave = () => {
        myAxios.post('consumers', consumer).then(response => {
            setLoading(true)
            setConsumer(response.data)
            if (response.status === 200) {
                setLoading(false)
                setPostOk(true)
            }
        }).catch(err => { setError(err) })
    }

    return (
        <Container maxWidth='md' className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel style={{ backgroundColor: 'transparent' }}>
                {DESCR.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === DESCR.length ? (
                    <div>
                        <Typography className={classes.instructions}>Acabou</Typography>
                        <Button variant='contained' onClick={handleReset}>Limpar</Button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <Typography className={classes.instructions}>{getStepContent()}</Typography>
                        </div>
                        <div>
                            <StepNavigator activeStep={activeStep} totalSteps={DESCR.length} canContinue={canContinue} next={handleNext} previous={handlePrevious} reset={handleReset} save={handleSave} />
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default AddConsumerView