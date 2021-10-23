import React from "react";

const SearchBar= ({search, setSearch}) => {
    return (
        <div>
            <h3>Search for Name:</h3>
            <input value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar;