import React from 'react'
import { TextField } from '@mui/material'

function TextInput(props) {
    const {multiline,type,label,value,setValue} = props;

    const handleChange = (e) => setValue(e.target.value);


    return (
        <TextField
            fullWidth
            multiline={multiline}
            required
            id='outlined-basic'
            variant='outlined'
            margin="none"
            type={type}
            label={label}
            value={value}
            onChange={handleChange}
            error={value === " " ? true : false}
            helperText={value === " " ? `${label} cannot be empty` : null}
        />
    )
}

export default TextInput