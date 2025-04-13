// contains search and filter bar for searching through expenses
import React from 'react' ;
function SearchBar({ searchTerm, onSearchChange,}) {
    return (
        <input
        type='text'
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}

export default SearchBar;