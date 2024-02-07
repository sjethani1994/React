import React, { useState, useEffect } from "react";
import "../styles/EditBlog.css";

const EditBlog = ({ blogData, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Set initial values based on received blogData
    if (blogData) {
      setTitle(blogData.title);
      setDescription(blogData.description);
      setImagePreview(blogData.imagePreview);
    }
  }, [blogData]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    // Update image preview
    const previewURL = URL.createObjectURL(selectedImage);
    setImagePreview(previewURL);

    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    onSave({ title, description, image });
  };

  return (
    <div className="edit-blog-container">
      <div className="background-image"></div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>

        <br />

        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>

        <br />

        <label>
          New Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        <br />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="image-preview"
          />
        )}

        <br />

        <div className="button-container">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
