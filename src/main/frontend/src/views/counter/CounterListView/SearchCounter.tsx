import { TextField } from '@material-ui/core'
import { SearchRounded } from '@material-ui/icons'
import React, { ChangeEvent, useState } from 'react'

interface ComponentProps {
}

const SearchCounter = () => {
    const [text, setText] = useState<string>('')

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setText(e.target.value)
    }

    return (
        <TextField label='Buscar contador' id='buscar-contador' value={text} variant='outlined' onChange={e => handleChange(e)} type='search' size='small'
            InputProps={{
                startAdornment: <SearchRounded />
            }}
        />
    )
}

export default SearchCounter 