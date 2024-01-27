// searchUsers.js
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const SearchUsers = () => {
  const { handleSearch } = useContext(UserContext);
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
