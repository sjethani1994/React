import React, { useState } from "react";
import "../styles/AddUser.css"; // Import the CSS file for styling

function AddUser({ onAddUser }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      userName,
      userEmail,
    };

    onAddUser(newUser);
    setUserName("");
    setUserEmail("");
  };

  return (
    <div className="add-user-container">
      <form>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <button type="button" onClick={addUser}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
