import { Typography } from '@material-ui/core'
import React, { ElementType, ReactNode } from 'react'

interface ComponentProps {
    children: ReactNode
}

export default function ({ children }: ComponentProps) {
    return (
        <Typography component='h2' variant='h6' color='primary' gutterBottom>
            {children}
        </Typography>
    )
}


