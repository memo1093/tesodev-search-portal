import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { SearchResults } from '../pages/SearchResults'
import { getAllUsers } from '../store/actions/userActions'

export const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAllUsers())
    }, [dispatch])
    return (
        <>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/results" component={SearchResults}/>
            
        </>
    )
}
