// UserList.js
import React, { useState } from "react";
import "../styles/UserList.css";

const UserList = ({
  user,
  deleteUser,
  updatedUser,
  setIsUserEditable,
  isUserEditable,
}) => {
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
    updatedUser(user.id, updatedUserData);

    // Exit edit mode after updating user
    setIsUserEditable(false);
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
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
                setIsUserEditable(true);
              }
            }}
          >
            {isUserEditable ? "📁 Save" : "✏️ Edit"}
          </button>

          {/* Button for deleting the user */}
          <button className="" onClick={() => deleteUser(user.id)}>
            ❌ Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
