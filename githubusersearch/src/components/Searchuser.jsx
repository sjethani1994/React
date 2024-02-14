/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../styles/searchStyles.css";
import { NavLink } from "react-router-dom";
function Searchuser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = () => {
    if (!searchTerm) return;
    fetch(`http://localhost:5000/search/repositories?searchTerm=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearchClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div class="container">
      <div className="search-box-container">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearchClick} className="search-button">
          Search
        </button>
      </div>
      {data && data.items.length > 0 && (
        <div className="results-container">
          <ul>
            {data.items.map((res) => (
              <li key={res.id}>
                <NavLink
                  to="/profile"
                  state={JSON.stringify(res)}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-orange-700" : "text-gray-700"}`
                  }
                >
                  {res.full_name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Searchuser;
