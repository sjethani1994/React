import React, { useState } from "react";
import "../styles/UserList.css";

const UserList = ({ user, deleteUser, updatedUser }) => {
  // State for handling the editable user name and email separately
  const [isUserEditable, setIsUserEditable] = useState(false);
  const [userName, setUserName] = useState(user.userName);
  const [userEmail, setUserEmail] = useState(user.userEmail);

  // Function to handle the user edit
  const editUser = () => {
    const updatedUserData = {
      ...user,
      userName: userName,
      userEmail: userEmail,
    };

    updatedUser(user.id, updatedUserData);

    // Exit edit mode after updating user
    setIsUserEditable(false);
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
            readOnly={!isUserEditable}
          />

          {/* Input for editing user email */}
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            readOnly={!isUserEditable}
          />

          {/* Button for toggling edit mode and saving edits */}
          <button
            className="inline-flex"
            onClick={() => setIsUserEditable(!isUserEditable)}
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
