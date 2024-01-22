// import React from "react";

// function UserProfile() {
//   return <div>UserProfile</div>;
// }

// export default UserProfile;
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const location = useLocation();
  const userData = JSON.parse(location.state);
  console.log(userData);
  if (!userData) {
    return <div className="loading">Loading...</div>; // Handle loading state
  }

  const {
    owner,
    name,
    description,
    language,
    fork,
    size,
    stargazers_count,
    watchers_count,
    forks_count,
    license,
    html_url,
    git_url,
    clone_url,
    svn_url,
    created_at,
    updated_at,
    open_issues_count,
    permissions,
  } = userData;

  return (
    <div className="user-profile">
      <table className="profile-table">
        <tbody>
          <tr>
            <td colSpan="2" className="user-info">
              <img
                src={owner.avatar_url}
                alt="User Avatar"
                className="avatar"
              />
              <h2>{owner.login}</h2>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="repo-info">
              <h3>{name}</h3>
              {description && <p>{description}</p>}
            </td>
          </tr>
          <tr>
            <td className="label">Language:</td>
            <td>{language}</td>
          </tr>
          <tr>
            <td className="label">Fork:</td>
            <td>{fork ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="label">Size:</td>
            <td>{size} KB</td>
          </tr>
          <tr>
            <td className="label">Stars:</td>
            <td>{stargazers_count}</td>
          </tr>
          <tr>
            <td className="label">Watchers:</td>
            <td>{watchers_count}</td>
          </tr>
          <tr>
            <td className="label">Forks:</td>
            <td>{forks_count}</td>
          </tr>
          {license && (
            <tr>
              <td className="label">License:</td>
              <td>{license.name}</td>
            </tr>
          )}
          <tr>
            <td colSpan="2" className="repo-urls">
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                {html_url}
              </a>
              <div>Git URL: {git_url}</div>
              <div>Clone URL: {clone_url}</div>
              <div>Repository URL: {svn_url}</div>
            </td>
          </tr>
          <tr>
            <td className="label">Created at:</td>
            <td>{created_at}</td>
          </tr>
          <tr>
            <td className="label">Updated at:</td>
            <td>{updated_at}</td>
          </tr>
          <tr>
            <td className="label">Open Issues:</td>
            <td>{open_issues_count}</td>
          </tr>
          <tr>
            <td className="label">Permissions:</td>
            <td>{JSON.stringify(permissions)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
