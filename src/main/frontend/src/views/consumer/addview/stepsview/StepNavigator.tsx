import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import styles from './StepNavigator.jss'

interface ComponentProps {
    activeStep: number
    totalSteps: number
    canContinue: () => boolean
    next: () => void
    previous: () => void
    reset: () => void
    save: () => void
}

const StepNavigator = ({ activeStep, totalSteps, canContinue, next, previous, reset, save }: ComponentProps) => {
    const classes = styles()

    useEffect(() => {
        const navigator = document.getElementById('step-navigator')! // exclamation point prevent null
        const observer = new IntersectionObserver(
            ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1), { threshold: [1] }
        )
        observer.observe(navigator)
        return () => observer.unobserve(navigator)
    })

    return <div className={classes.navigator} id='step-navigator'>
        <div className={classes.buttons}>
            <Button disabled={activeStep === 0} tabIndex={-1} onClick={reset} variant='contained' size='small' color='primary'>
                Voltar para início
            </Button>
            <Button disabled={activeStep === 0} tabIndex={-1} onClick={previous} variant='contained' size='small' color='primary'>
                Voltar
            </Button>
            <Button disabled={!canContinue() || activeStep === (totalSteps - 1)} variant='contained' color='primary' onClick={next} size='small'>
                Avançar
            </Button>
            <Button variant='contained' color='primary' onClick={save} size='small' className={classes.saveButton} disabled={activeStep !== 2}>
                Salvar e ir do editor
            </Button>
        </div>
    </div>
}

export default StepNavigator