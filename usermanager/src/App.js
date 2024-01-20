// App.js
import React, { useState } from "react";
import "./App.css";
import UserList from "./components/userList";
import AddUser from "./components/addUser";

function App() {
  // State for storing user data
  const [users, setUsers] = useState([]);

  // State for managing whether a user is in editable mode
  const [isUserEditable, setIsUserEditable] = useState(false);

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

  return (
    <div className="App">
      {/* Component for adding a new user */}
      <AddUser onAddUser={handleAddUser} />

      {/* Component for displaying the list of users */}

      {users.map((user) => (
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
  );
}

export default App;
