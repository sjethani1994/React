// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/userList";
import AddUser from "./components/addUser";
import SearchUsers from "./components/searchUsers";
import ProductList from "./components/ProductList";

function App() {
  // State for storing user data
  const [users, setUsers] = useState([]);

  // State for managing whether a user is in editable mode
  const [isUserEditable, setIsUserEditable] = useState(false);

  // State for filtered users
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Function to handle adding a new user
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Function to delete a user
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  // Placeholder logic for updating a user
  const updatedUser = (id, userData) => {
    // Use map to create a new array with the updated user
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );

    // Update the state with the new array of users
    setUsers(updatedUsers);
  };

  // Function to toggle user editable mode
  const toggleUserEditable = () => {
    setIsUserEditable((prev) => !prev);
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    const filtered = users.filter(
      (user) =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.userEmail.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the filtered users
    setFilteredUsers(filtered);
  };

  // Initialize filtered users with all users when the component mounts
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div className="App">
      {/* Component for adding a new user */}
      <AddUser onAddUser={handleAddUser} />

      {/* Component for displaying the list of users */}
      {users.length === 0 ? (
        <div></div>
      ) : (
        <div className="main-container">
          <h2>User List</h2>
          <SearchUsers handleSearch={handleSearch} />
          {filteredUsers.map((user) => (
            <div key={user.id} className="w-full">
              <UserList
                user={user}
                deleteUser={deleteUser}
                updatedUser={updatedUser}
                setIsUserEditable={toggleUserEditable}
                isUserEditable={isUserEditable}
              />
            </div>
          ))}
        </div>
      )}

      <ProductList />
    </div>
  );
}

export default App;
