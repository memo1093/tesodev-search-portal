import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OrderBy } from "../layouts/OrderBy";
import { Paginate } from "../layouts/Paginate";
import { SearchBar } from "../layouts/SearchBar";
import { SearchResult } from "../layouts/SearchResult";

export const SearchResults = () => {
    const searchResults = useSelector(state => state.users.searchResults.users)
    const currentPage = useSelector(state => state.users.searchResults.currentPage)
    const orderBy = useSelector(state => state.users.searchResults.orderBy)
    

    const [showUsers, setShowUsers] = useState(5)
    useEffect(() => {
      setShowUsers(currentPage*5)
    }, [currentPage,orderBy,searchResults])
  return (
    <div>
      <nav className="navbar">
        <img src="/icon.svg" alt="icon" className="icon" />
        <SearchBar placeholder="Search" error={searchResults.length===0}/>
      </nav>

      {searchResults?.length >= 1 && (
        <>
        <OrderBy/>
        <div className="search-result-container-middle">
          {searchResults?.slice(showUsers-5,showUsers).map((user) => (
            <SearchResult user={user} />
          ))}
      <Paginate/>
        </div>
        </>
      )}
    </div>
  );
};
