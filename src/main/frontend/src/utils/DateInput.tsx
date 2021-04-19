import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { Fragment, useEffect } from 'react'

interface ComponentProps {
    selected: Date | null
    label: string
    handleDate: (date: Date | null) => void
}

const DateInput = ({ selected, label, handleDate }: ComponentProps) => {

    return (<Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
                disableToolbar
                margin='normal'
                label={label}
                format='dd/MM/yyyy'
                value={selected}
                id='install-date'
                onChange={handleDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date'
                }}
                style={{ paddingBottom: '8px' }}
            />
        </MuiPickersUtilsProvider>
    </Fragment>
    )
}

export default DateInput