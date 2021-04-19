import React, { ReactNode } from 'react'
import styles from './Divider.jss'

interface ComponentProps {
    children: ReactNode
}

const Divider = ({ children }: ComponentProps) => {
    const classes = styles()
    return (
        <div className={classes.container}>
            <div className={classes.border} />
            <span className={classes.content}>
                {children}
            </span>
            <div className={classes.border} />
        </div>
    )
}

export default Divider