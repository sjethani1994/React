import React, { useState, useEffect } from "react";
import "../styles/EditBlog.css";
import { useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";
import API from "../connection/connection";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [imageError, setImageError] = useState("");
  const [error, setError] = useState("");

  const location = useLocation(); // Get location object
  const [blog, setBlogData] = useState(location.state);

  useEffect(() => {
    // Set initial values based on received blogData
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImagePreview(blog.image);
    }
  }, [blog]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    // Update image preview
    const previewURL = URL.createObjectURL(selectedImage);
    setImagePreview(previewURL);

    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset previous error messages
    setTitleError("");
    setContentError("");
    setImageError("");
    setError("");

    try {
      // Check if any field is empty
      if (!title) {
        setTitleError("Title is required.");
        return;
      }
      if (!content) {
        setContentError("Content is required.");
        return;
      }
      if (!image) {
        setImageError("Image is required.");
        return;
      }

      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.post(
        `${API}/blogs/updateBlog/${blog._id}`,
        { title, content, imagePreview },
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        // Reset the form fields after submission
        setTitle("");
        setContent("");
        setImage(null);
        setImagePreview(null);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      // If there's an error, set error message
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="edit-blog-container">
      <div className="background-image"></div>
      <div className="form-div">
        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-fields">
            <label>
              Title:
              <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            {titleError && (
              <Alert className="alert" variant="danger">
                {titleError}
              </Alert>
            )}
            <br />

            <label>
              Description:
              <textarea value={content} onChange={handleContentChange} />
            </label>
            {contentError && (
              <Alert className="alert" variant="danger">
                {contentError}
              </Alert>
            )}

            <br />
            <label>
              New Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            {imageError && (
              <Alert className="alert" variant="danger">
                {imageError}
              </Alert>
            )}

            <br />
          </div>

          <div className="image-preview-container">
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            )}
          </div>

          <br />

          {error && <div className="error">{error}</div>}

          <br />

          <div className="button-container">
            <button type="submit">Save Changes</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
