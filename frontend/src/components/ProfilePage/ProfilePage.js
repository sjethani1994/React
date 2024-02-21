import React, { useState } from "react";
import "./profilePage.css";
import usePost from "../../hooks/usePost";

function ProfilePage() {
  // State object for form fields
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    bio: "",
    birthDate: "",
    address: "",
    country: "",
    phone: "",
    website: "",
    google: "",
    linkedIn: "",
    instagram: "",
    avatar: "",
  });

  // State variable for error message
  const [errorMessage, setErrorMessage] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);
  const {data, error, updateProfile} = usePost();
  
  // Function to handle form field changes
  const handleFieldChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));

    if (name === "avatar" && files) {
      console.log(avatarPreview);
      const avatarURL = URL.createObjectURL(files[0]);
      setAvatarPreview(avatarURL);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile
  };

  return (
    <>
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Profile</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#account-general"
                >
                  General
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-info"
                >
                  Info
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-social-links"
                >
                  Social links
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="account-general">
                  <div className="card-body media align-items-center">
                    <img
                      src={
                        avatarPreview ||
                        "https://bootdey.com/img/Content/avatar/avatar1.png"
                      }
                      alt="avataar"
                      name="avatar"
                      className="d-block ui-w-80"
                      onError={(e) => {
                        e.target.src =
                          "https://bootdey.com/img/Content/avatar/avatar1.png";
                      }}
                    />
                    <div className="media-body ml-4">
                      <label class="label">
                        <input
                          type="file"
                          name="avatar"
                          onChange={handleFieldChange}
                        />
                        <span>Select a file</span>
                      </label>
                      <div className="text-light small mt-1">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </div>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <form>
                      <div
                        className="card-body media align-items-center"
                        style={{ display: "flow" }}
                      >
                        {/* Username */}
                        <div className="form-group">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control mb-1"
                            value={formData.username}
                            onChange={handleFieldChange}
                            required
                          />
                        </div>
                        {/* firstName */}
                        <div className="form-group row">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className="form-control mb-1"
                              value={formData.firstName}
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className="form-control mb-1"
                              value={formData.lastName}
                              onChange={handleFieldChange}
                            />
                          </div>
                        </div>
                        {/* Email */}
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control mb-1"
                            value={formData.email}
                            onChange={handleFieldChange}
                            required
                          />
                        </div>
                        {/* Company */}
                        <div className="form-group">
                          <label htmlFor="company" className="form-label">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="form-control"
                            value={formData.company}
                            onChange={handleFieldChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Info */}
                <div className="tab-pane fade" id="account-info">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        name="bio"
                        value={formData.bio}
                        onChange={handleFieldChange}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        type="date"
                        className="form-control"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select
                        className="custom-select"
                        name="country"
                        value={formData.country}
                        onChange={handleFieldChange}
                      >
                        <option>USA</option>
                        <option>Canada</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Contacts</h6>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        type="text"
                        className="form-control"
                        name="website"
                        value={formData.website}
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="tab-pane fade" id="account-social-links">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Google+</label>
                      <input
                        type="text"
                        className="form-control"
                        name="google"
                        value={formData.google}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Display error message if submission fails */}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="text-right mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save changes
          </button>
          &nbsp;
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
