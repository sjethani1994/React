// UserList.js
import React, { useContext, useState } from "react";
import "../styles/UserList.css";
import UserContext from "../context/UserContext";

const UserList = (user) => {
  const { isUserEditable, deleteUser, updateUser, toggleUserEditable } =
    useContext(UserContext);
  // State for handling the editable user name
  const [userName, setUserName] = useState(user.userName);

  // State for handling the editable user email
  const [userEmail, setUserEmail] = useState(user.userEmail);

  // Function to handle the user edit
  const editUser = (user) => {
    // Create an object with the updated user data
    const updatedUserData = {
      ...user,
      userName,
      userEmail,
    };

    // Call the function to update the user with the edited data
    updateUser(user.id, updatedUserData);

    // Exit edit mode after updating user
    toggleUserEditable(false);
  };

  return (
    <div className="user-list-container">
      <ul>
        <li key={user.id}>
          {/* Input for editing user name */}
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            readOnly={!isUserEditable} // Make input read-only when not in edit mode
          />

          {/* Input for editing user email */}
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            readOnly={!isUserEditable} // Make input read-only when not in edit mode
          />

          {/* Button for toggling edit mode and saving edits */}
          <button
            className="inline-flex"
            onClick={() => {
              if (isUserEditable) {
                // Save edits and exit edit mode
                editUser(user);
              } else {
                // Enter edit mode
                toggleUserEditable(true);
              }
            }}
          >
            {isUserEditable ? "📁" : "✏️"}
          </button>

          {/* Button for deleting the user */}
          <button className="" onClick={() => deleteUser(user.id)}>
            ❌
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
