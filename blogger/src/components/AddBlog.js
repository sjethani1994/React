import React, { useState } from "react";
import axios from "axios";
import "../styles/AddBlog.css"; // Make sure to import the CSS file
import API from "../connection/connection";
import { Alert } from "react-bootstrap";
import { swalSuccess } from "../utils/Swal";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));

    if (name === "avatar" && files) {
      const avatarURL = URL.createObjectURL(files[0]);
      setAvatarPreview(avatarURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate form fields
      if (!formData.title || !formData.content || !formData.avatar) {
        throw new Error("All fields are required.");
      }

      const headers = {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(`${API}/blogs/upload`, formData, {
        headers,
      });

      if (response.status === 201) {
        swalSuccess("", response.data.message);
        // Reset form data and avatar preview after submission
        setFormData({
          title: "",
          content: "",
          avatar: null,
        });
        setAvatarPreview(null);
      }
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="add-blog-container background-image d-flex">
      <div className="form-container">
        <h2>Add Blog</h2>
        <form onSubmit={handleSubmit} className="blog-form">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          {errors.title && (
            <Alert className="alert" variant="danger">
              {errors.title}
            </Alert>
          )}

          <br />

          <label>
            Content:
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </label>
          {errors.content && (
            <Alert className="alert" variant="danger">
              {errors.content}
            </Alert>
          )}

          <br />

          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              name="avatar"
              onChange={handleChange}
            />
          </label>
          {errors.avatar && (
            <Alert className="alert" variant="danger">
              {errors.avatar}
            </Alert>
          )}

          <br />

          {avatarPreview && (
            <img src={avatarPreview} alt="Preview" className="avatar-preview" />
          )}

          <br />

          {errors.message && (
            <Alert className="alert" variant="danger">
              {errors.message}
            </Alert>
          )}

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
