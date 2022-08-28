import React from 'react'
import './TextView.css'

function TextView(props) {
    const {label, value} = props;
  return (
    <>
    <div className='item-view'>
        <div className='item-label'>{label}</div>
        <div className='item-value'>{value}</div>

    </div>
    </>
  )
}

export default TextView