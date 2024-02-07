import React, { useState } from "react";
import "../styles/AddBlog.css";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);

    // Reset the form fields after submission
    setTitle("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
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

          <br />

          <label>
            Description:
            <textarea value={description} onChange={handleDescriptionChange} />
          </label>

          <br />

          <label>
            Image:
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
