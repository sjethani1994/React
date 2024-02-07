import React from "react";
import "../styles/Bloglist.css";
function Bloglist({ blog }) {
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
              src={blog.image} // Replace with your actual image URL
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
      </div>
    </>
  );
}

export default Bloglist;
