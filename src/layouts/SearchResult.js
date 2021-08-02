import React from 'react'

export const SearchResult = ({user}) => {
    return (
        <div className="search-result">
            <div className="email"><p>Email: {user[2]}</p></div>
                <p className="address">{user[4]} - {user[5]}</p>
                <p className="identity">{user[0]} - {user[3].slice(user[3].lastIndexOf("/")+1,user[3].length)}</p>
                <hr className="seperator"></hr>
            </div>
    )
}
