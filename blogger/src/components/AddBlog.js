import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "../styles/AddBlog.css";
import API from "../connection/connection";
import { Alert } from "react-bootstrap";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [imageError, setImageError] = useState("");
  const [error, setError] = useState("");

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
      }
      if (!content) {
        setContentError("Content is required.");
      }
      if (!image) {
        setImageError("Image is required.");
        return;
      }

      // Post form data to the server
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);

      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.post(`${API}/blogs/createBlog`, formData, {
        headers: headers,
      });

      // If successful response, navigate to home page
      if (response.status === 200) {
        // Reset the form fields after submission
        setTitle("");
        setContent("");
        setImage("");
        setImagePreview("");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      // If there's an error, set error message
      setError(error.response.data.message);
    }
  };

  return (
    <div className="add-blog-container background-image">
      <div className="form-container">
        <h2>Add Blog</h2>
        <form onSubmit={handleSubmit} className="blog-form">
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
            Content:
            <textarea value={content} onChange={handleContentChange} />
          </label>
          {contentError && (
            <Alert className="alert" variant="danger">
              {contentError}
            </Alert>
          )}

          <br />

          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          {imageError && (
            <Alert className="alert" variant="danger">
              {imageError}
            </Alert>
          )}

          <br />

          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="image-preview" />
          )}

          <br />

          {error && <div className="error">{error}</div>}

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
