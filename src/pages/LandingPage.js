import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SearchBar } from '../layouts/SearchBar'
import { SearchResult } from '../layouts/SearchResult'

export const LandingPage = () => {
    const searchResults = useSelector(state => state.users.searchResults.users)
    return (
        <div className="container">
            <div className="icon-centered">

            <img  src="/icon.svg" alt="icon"/>
            <p className="outer-text">Search web app</p>
            </div>
            <div className="search-container">

            <SearchBar main size="huge" error={searchResults.length===0}/>
            {searchResults.length>=1&&
                <div className="search-result-container">
                {searchResults?.slice(0,3).map(user=>(<SearchResult user={user}/>))}
                 {searchResults.length>=3&&(<Link className="show-more" exact to={"/results"}>Show more</Link>)}   
                </div>
            }
            </div>
            
            
            
            
        </div>
    )
}
