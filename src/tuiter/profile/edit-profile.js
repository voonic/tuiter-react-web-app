import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./profile.css";

const EditProfileComponent = () => {
  const profileData = useSelector(state => state.profile)
  const [newProfileData, setNewProfileData] = useState(profileData);

  return (
    <div className="wd-con-box">
      <div className="d-flex flex-row align-items-center">
        <div>
          <i className="fa fa-times text-muted p-3" />
        </div>
        <div className="flex-fill">
          <p className="fw-bold m-0">Edit Profile</p>
        </div>
        <div className="me-3">
          <button type="button" className="btn btn-sm btn-dark rounded-pill">Save</button>
        </div>
      </div>
      <div className="position-relative">
        <img className="img-fluid" src={`/images/${profileData.bannerPicture}`} alt="profile banner" />
        <div className="position-absolute wd-dp-box ms-3">
          <img src={`/images/${profileData.profilePicture}`} className="wd-dp img-fluid" />
        </div>
      </div>
      <div className="ms-3 me-3 mt-5 pt-4">
        <div className="wd-inp-con form-group">
          <label for="fullnameInput">Name</label>
          <input type="text" className="form-control" id="fullnameInput" placeholder="Enter your full name" defaultValue={profileData.firstName + ' ' + profileData.lastName} />
        </div>
        <div className="wd-inp-con form-group mt-3">
          <label for="bioInput">Bio</label>
          <textarea className="form-control" id="bioInput" placeholder="Enter your bio here" defaultValue={profileData.bio} />
        </div>
        <div className="wd-inp-con form-group mt-3">
          <label for="locationInput">Location</label>
          <input type="text" className="form-control" id="locationInput" placeholder="Enter your location" defaultValue={profileData.location} />
        </div>
        <div className="wd-inp-con form-group mt-3">
          <label for="websiteInput">Website</label>
          <input type="text" className="form-control" id="websiteInput" placeholder="Your personal website link" defaultValue={profileData.website} />
        </div>
      </div>
    </div>
  );
}

export default EditProfileComponent;