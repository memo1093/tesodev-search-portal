import React from 'react'
import { Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { SearchResults } from '../pages/SearchResults'

export const Dashboard = () => {
    
    return (
        <>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/results" component={SearchResults}/>
            
        </>
    )
}
