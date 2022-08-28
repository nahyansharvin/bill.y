import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Custom Components
import AddItem from './components/addItem/AddItem'
import ViewItem from './components/viewItem/ViewItem'

//Material UI
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function ItemDetails() {
    const [items, setItems] = useState([]);

    //Delete Button handler
    function handleDelete(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div className='item-details-wrapper section-margin'>
            <Link to='/'>
                <Button variant="text" startIcon={<ArrowBackIosIcon />} sx={{ color: "#121212", fontWeight: "bold" }} >Back</Button>
            </Link>
            <h3>Item Details</h3>

            {/* List Items */}
            {
                items.map((item, index) => {<ViewItem key={index} item={item} index={index} handleDelete={handleDelete} />})
            }

            <AddItem items={items} setItems={setItems} />
        </div>
    )
}

export default ItemDetails