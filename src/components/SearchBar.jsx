// filepath: /home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search expenses"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;