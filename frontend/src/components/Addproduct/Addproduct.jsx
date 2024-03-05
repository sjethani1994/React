import React, { useEffect, useState } from "react";
import usePost from "../../hooks/usePost"; // Import the usePost hook
function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    startDate: "",
    endDate: "",
    productImage: null,
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [errors, setErrors] = useState({});
  // Destructuring values returned by usePost hook
  const { data, error, addProduct } = usePost();
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
    let errors = {};
    let hasErrors = false;

    // Validation for required fields
    if (!formData.title.trim()) {
      errors.title = "Product name is required";
      hasErrors = true;
    }
    if (!formData.description.trim()) {
      errors.description = "Product description is required";
      hasErrors = true;
    }
    if (!formData.price) {
      errors.price = "Product price is required";
      hasErrors = true;
    }
    if (!formData.category) {
      errors.category = "Product category is required";
      hasErrors = true;
    }
    if (!formData.startDate) {
      errors.startDate = "Start date is required";
      hasErrors = true;
    }
    if (!formData.endDate) {
      errors.endDate = "End date is required";
      hasErrors = true;
    }
    if (!formData.avatar) {
      errors.productImage = "Product image is required";
      hasErrors = true;
    }

    // If there are errors, set them in the state and return
    if (hasErrors) {
      setErrors(errors);
      return;
    }

    // If no errors, submit the form
    await addProduct(formData);
    // Clear form data and errors after successful submission
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "",
      startDate: "",
      endDate: "",
      productImage: "",
      avatar: "",
    });
    setAvatarPreview(null);
    setErrors({});
  };

  useEffect(() => {
    if (data && data.status === 200) {
    }
  }, [data, error]);

  return (
    <div className="container mt-3 mb-3">
      <div
        className="card p-4"
        style={{
          width: "100%",
          maxWidth: "650px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "auto",
          backgroundColor: "#f5f5f54a",
        }}
      >
        <h2 className="mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <div className="text-danger">{errors.title}</div>}
          </div>
          {/* Product Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <div className="text-danger">{errors.description}</div>
            )}
          </div>
          {/* Product Price */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <div className="text-danger">{errors.price}</div>}
          </div>
          {/* Product Category */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Product Category
            </label>
            <select
              className="form-select form-control form-select-lg mb-3"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              {/* Add more options as needed */}
            </select>
            {errors.category && (
              <div className="text-danger">{errors.category}</div>
            )}
          </div>
          {/* Start Date */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
              {errors.startDate && (
                <div className="text-danger">{errors.startDate}</div>
              )}
            </div>
            {/* End Date */}
            <div className="col-md-6 mb-3">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
              {errors.endDate && (
                <div className="text-danger">{errors.endDate}</div>
              )}
            </div>
          </div>
          {/* Product Image */}
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              accept="image/*"
              name="avatar"
              onChange={handleChange}
            />
            {errors.productImage && (
              <div className="text-danger">{errors.productImage}</div>
            )}
          </div>
          <div className="mb-3">
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Preview"
                style={{ width: "600px" }}
                className="avatar-preview"
              />
            )}
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
