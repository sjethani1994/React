import React, { useState, useEffect } from "react";
import "../styles/EditBlog.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import API from "../connection/connection";

const EditBlog = () => {
  const location = useLocation(); // Get location object
  const [blog] = useState(location.state);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    avatar: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    // Set initial values based on received blogData
    if (blog) {
      setFormData({
        title: blog.title,
        content: blog.content,
        avatar: `http://localhost:5000/${blog.avatar.replace(/\\/g, "/")}`,
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));

    if (name === "avatar" && files) {
      const previewURL = URL.createObjectURL(files[0]);
      setImagePreview(previewURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Validate form fields
      if (!formData.title || !formData.content || !formData.avatar) {
        throw new Error("All fields are required.");
      }

      const headers = {
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.post(
        `${API}/blogs/updateBlog/${blog._id}`,
        createFormData(formData),
        { headers }
      );

      if (response.status === 200) {
        // Reset the form fields after submission
        setFormData({
          title: "",
          content: "",
          avatar: null,
        });
        setImagePreview(null);
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const createFormData = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("userId", "65c24158852ff3fa5fecb6dd");
    formData.append("avatar", data.avatar);
    return formData;
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
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Description:
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              New Image:
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleChange}
              />
            </label>
            <br />
          </div>

          <div className="image-preview-container">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            ) : (
              formData.avatar && (
                <img
                  src={formData.avatar}
                  alt="Preview"
                  className="image-preview"
                />
              )
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
