import React, { useContext } from "react";
import "./App.css";
import AddUser from "./components/addUser";
import SearchUsers from "./components/searchUsers";
import UserList from "./components/userList";
import UserContext from "./context/UserContext";

function App() {
  const { users, filteredUsers } = useContext(UserContext);

  return (
      <div className="App">
        {/* Component for adding a new user */}
        <AddUser />

        {/* Component for displaying the list of users */}
        {users.length === 0 ? (
          <div></div>
        ) : (
          <div className="main-container">
            <h2>User List</h2>
            <SearchUsers />
            {filteredUsers.map((user) => (
              <div key={user.id} className="w-full">
                <UserList user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
  );
}

export default App;
