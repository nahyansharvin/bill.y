import React, { useState } from 'react'
import "./ClientDetails.css"
import { Link, useNavigate } from 'react-router-dom'

//Custom components
import TextInput from '../../components/textInput/TextInput';

//Material UI
import { TextField, Button, Grid } from '@mui/material';
//Date Picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function ClientDetails() {
    const navigate = useNavigate();
    //States 
    const [invoiceNo, setInvoiceNo] = useState();
    const [invoiceDate, setInvoiceDate] = useState(new Date());
    const [companyName, setCompanyName] = useState();
    const [companyAddress, setCompanyAddress] = useState();
    const [oldBalance, setOldBalance] = useState();

    //To structure Date
    const getDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    //   console.log(getDate(invoiceDate));
    const handleNextButton = () => {
        navigate('/items');
    }

    return (
        <div className='client-details-wrapper section-margin'>
            <h3>Client Details</h3>
            <div className='client-details-form'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextInput type='Number' label="Invoice Number" value={invoiceNo} setValue={setInvoiceNo} />
                    </Grid>
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Invoice Date"
                                value={invoiceDate}
                                onChange={(newValue) => {
                                    setInvoiceDate(newValue);
                                }}
                                disableFuture
                                renderInput={(params) => <TextField fullWidth id='outlined-basic'
                                    variant='outlined'
                                    margin="none" {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput label="Company Name" value={companyName} setValue={setCompanyName} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput multiline label="Company Address" value={companyAddress} setValue={setCompanyAddress} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput type='Number' label="Old Balance if any" value={oldBalance} setValue={setOldBalance} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" onClick={handleNextButton} >Next</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ClientDetails