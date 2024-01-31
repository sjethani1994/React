// searchUsers.js
import React, { useState } from "react";

const SearchUsers = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchUsers;
