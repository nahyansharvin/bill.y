import React from 'react'
import { TextField } from '@mui/material'

function TextInput(props) {
    const {multiline,type,label,value,setValue,disabled} = props;

    const handleChange = (e) => setValue(e.target.value);


    return (
        <TextField
            fullWidth
            multiline={multiline}
            disabled={disabled}
            required
            id='outlined-basic'
            variant='outlined'
            margin="none"
            type={type}
            label={label}
            error={value === "" ? true : false}
            value={value}
            onChange={handleChange}
            helperText={value === "" ? `${label} cannot be empty` : null}
        />
    )
}

export default TextInput