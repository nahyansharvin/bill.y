import React, { useContext, } from 'react'
import { useNavigate } from 'react-router-dom'
import './ItemDetails.css'

//Custom Components
import AddItem from './components/addItem/AddItem'
import ViewItem from './components/viewItem/ViewItem'

//Material UI
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PrintIcon from '@mui/icons-material/Print';

//Context
import ClientContext from "../../ClientContext";


function ItemDetails() {
    const { items, setItems, clientDetails } = useContext(ClientContext);
    const navigate = useNavigate();

    //Delete Button handler
    function handleDelete(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div className='item-details-wrapper section-margin'>
            <div className='button-wrapper'>
                <Button variant="text" startIcon={<ArrowBackIosIcon />} sx={{ color: "#121212", fontWeight: "bold" }} onClick={()=>navigate("/")} >Back</Button>

                <Button size="large"  variant="contained" endIcon={<PrintIcon />} sx={{ letterSpacing:"2px" }} onClick={()=>(console.log(clientDetails, items))} >Print</Button>
            </div>
            
            <h3>Items</h3>

            <div className='items-list'>
            {/* List Items */}
            {
                items.map((item, index) => <ViewItem key={index} item={item} index={index} handleDelete={handleDelete} />)
            }

            <AddItem items={items} setItems={setItems} />
            </div>
        </div>
    )
}

export default ItemDetails