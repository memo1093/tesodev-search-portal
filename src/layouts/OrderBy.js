import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderBy } from '../store/actions/userActions'

export const OrderBy = () => {
    const [optionsOpen, setOptionsOpen] = useState(false)

    const dispatch = useDispatch()
    return (
        <div className="order"  onClick={()=>setOptionsOpen(!optionsOpen)} >
        <img src="/arrowicon.svg" alt="order"/>
        Order by
        {optionsOpen&&(
            <div className="order-options">
            <p onClick={()=>dispatch(orderBy('Name Ascending'))}>Name ascending</p>
            <p onClick={()=>dispatch(orderBy('Name Descending'))}>Name descending</p>
            <p onClick={()=>dispatch(orderBy('Year Ascending'))}>Year ascending</p>
            <p onClick={()=>dispatch(orderBy('Year Descending'))}>Year descending</p>
        </div>
        )}
        
      </div>
    )
}
