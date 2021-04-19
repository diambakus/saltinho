import NumberFormat from 'react-number-format'
import React from 'react'

export function NumberFormatCustom(props: any) {
    const { inputRef, onChange, ...other } = props

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values: any) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value
                    }
                })
            }
            }
            thousandSeparator
        />
    )
}