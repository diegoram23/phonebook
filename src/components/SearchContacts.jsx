import React from "react";

const SearchContacts = ({ searchValue, handleSearchChange }) => {
    return (
        <div>
            Search: <input
                value={searchValue}
                onChange={handleSearchChange} />
        </div>
    )
}

export default SearchContacts