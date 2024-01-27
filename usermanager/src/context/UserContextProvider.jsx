import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

// UserContextProvider component
const UserContextProvider = ({ children }) => {
  // State for storing user data
  const [users, setUsers] = useState([]);

  // State for managing whether a user is in editable mode
  const [isUserEditable, setIsUserEditable] = useState(false);

  // State for filtered users
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Function to delete a user
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  // Function to update a user
  const updateUser = (id, userData) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
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
    setFilteredUsers(filtered);
  };

  // useEffect to update filtered users when the component mounts or when users change
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <UserContext.Provider
      value={{
        users,
        isUserEditable,
        filteredUsers,
        addUser,
        deleteUser,
        updateUser,
        toggleUserEditable,
        handleSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
