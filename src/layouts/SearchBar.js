import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers } from '../store/actions/userActions'

export const SearchBar = ({size="medium",main,placeholder,error}) => {
    const beforeSearch = useSelector(state => state.users.searchResults.searchText)
    const [searchText, setSearchText] = useState(beforeSearch?beforeSearch:"")
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(searchUsers(searchText))
    }
   
    return (
        <div className={`search-bar search-bar-${size}`}>
            <form onSubmit={handleSubmit} className="search-bar-form">
            <input className={"search-input " + (main ? 'search-input-main ' : '') +(error?"search-input-error":"")} placeholder={placeholder} type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
            <button className="search-button" type="submit" >Search</button>
            </form>
            {error&&(<p className="error-text">Arama sonucu bulunamadı</p>)}
        </div>
    )
}
