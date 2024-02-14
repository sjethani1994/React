import React from "react";
import "../styles/Bloglist.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../connection/connection";
function Bloglist({ blog }) {
  const navigate = useNavigate();
  const renderLastUpdatedMessage = (updatedAt) => {
    const currentDate = new Date();
    const updatedDate = new Date(updatedAt);

    const diffInMs = currentDate - updatedDate;
    const diffInMinutes = Math.round(diffInMs / (1000 * 60));

    if (diffInMinutes > 60) {
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours > 24) {
        const diffInDays = Math.floor(diffInHours / 24);
        return `Last updated ${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
      } else {
        return `Last updated ${diffInHours} hour${
          diffInHours > 1 ? "s" : ""
        } ago`;
      }
    } else {
      return `Last updated ${diffInMinutes} minute${
        diffInMinutes > 1 ? "s" : ""
      } ago`;
    }
  };

  const editBlog = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const headers = {
        Authorization: token,
      };

      const response = await axios.get(`${API}/blogs/getBlogById/${blog._id}`, {
        headers,
      });

      if (response.status === 200) {
        const data = response.data;
        // If successful, navigate to the edit page with the current blog data
        navigate(`/editBlog/${blog._id}`, { state: data });
      } else {
        // Handle other status codes
        console.error(`Failed to fetch blog: ${response.status}`);
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching blog:", error);
    }
  };

  return (
    <>
      <div
        className="card mb-3"
        style={{
          maxWidth: "540px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`http://localhost:5000/${blog.avatar.replace(/\\/g, "/")}`}
              className="img-fluid rounded-start"
              alt="Card preview"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {blog.title} </h5>
              <p className="card-text">{blog.content}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {renderLastUpdatedMessage(blog.updatedAt)}
                </small>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="card-footer">
            <button className="btn btn-primary mr-2" onClick={editBlog}>
              <i class="fa-solid fa-pen"></i>
              &nbsp; Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bloglist;
