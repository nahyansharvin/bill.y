import React from 'react'
import './ViewItem.css'

//Custom Components
import TextView from '../textView/TextView'

//Material UI
import { Button, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


function ViewItem(props) {
    const {item, index, handleDelete} = props;
    return (
        <div className='item-container'>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1}>
                    <h2>{index + 1}</h2>
                </Grid>
                <Grid item xs={7} sm={7}>
                    <TextView label="Item Name" value={item.itemName} />
                </Grid>
                <Grid item xs={4} sm={4}>
                    <TextView label="No of boxes" value={item.NOofBoxes} />
                </Grid>

                <Grid item xs={3} sm={3}>
                    <TextView label="kg/Box" value={item.kgPerBox} />
                </Grid>
                <Grid item xs={3} sm={3}>
                    <TextView label="Tot weight" value={item.TotalWeight} />
                </Grid>
                <Grid item xs={3} sm={3}>
                    <TextView label="Rate/Box ₹" value={item.amtPerBoxINR} />
                </Grid>
                <Grid item xs={3} sm={3}>
                    <TextView label="Rate/Box-$" value={item.amtPerBoxUSD} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextView label="TOTAL INR" value={`₹ ${item.TotalINR}`} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextView label="TOTAL USD" value={`$ ${item.TotalUSD}`} />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Button fullWidth variant="contained" color="primary" endIcon={<DeleteIcon />} onClick={() => handleDelete(index)} >Delete Item</Button>
                </Grid>

            </Grid>

        </div>
    )
}

export default ViewItem