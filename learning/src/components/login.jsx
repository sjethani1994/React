import React, { useState } from "react";

const LoginPage = ({ setloginDetails }) => {
  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Event handler for username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for login button click
  const handleLogin = () => {
    setloginDetails({ username, password });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
