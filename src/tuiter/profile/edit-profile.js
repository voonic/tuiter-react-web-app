import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile } from "./profile-reducer";
import "./profile.css";

const EditProfileComponent = () => {
  const dispatch = useDispatch();
  const defaultProfileData = useSelector(state => state.profile)
  const [profileData, setNewProfileData] = useState(defaultProfileData);

  const inputChangeHandler = (key, value) => {
    setNewProfileData(oldstate => {
      if (key == 'fullName') {
        const splitName = value.split(/\\s/);
        return {
          ...oldstate,
          firstName: splitName[0],
          lastName: splitName[1] || '',
        }
      } else {
        return {
          ...oldstate,
          [key]: value,
        }
      }
    });
  }

  const saveProfileData = () => {
    dispatch(editProfile(profileData));
  }

  return (
    <div className="wd-con-box">
      <div className="d-flex flex-row align-items-center">
        <div>
          <Link to="/tuiter/profile"><i className="fa fa-times text-muted p-3" /></Link>
        </div>
        <div className="flex-fill">
          <p className="fw-bold m-0">Edit Profile</p>
        </div>
        <div className="me-3">
          <button type="button" className="btn btn-sm btn-dark rounded-pill" onClick={saveProfileData}>Save</button>
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
          <label htmlFor="fullnameInput">Name</label>
          <input type="text" className="form-control" id="fullnameInput" placeholder="Enter your full name" value={profileData.firstName + ' ' + profileData.lastName} onChange={(e) => inputChangeHandler("fullName", e.target.value)} />
        </div>
        <div className="wd-inp-con form-group mt-3">
          <label htmlFor="bioInput">Bio</label>
          <textarea className="form-control" id="bioInput" placeholder="Enter your bio here" value={profileData.bio} onChange={(e) => inputChangeHandler("bio", e.target.value)} />
        </div>
        <div className="wd-inp-con form-group mt-3">
          <label htmlFor="locationInput">Location</label>
          <input type="text" className="form-control" id="locationInput" placeholder="Enter your location" value={profileData.location} onChange={(e) => inputChangeHandler("location", e.target.value)} />
        </div>
        <div className="wd-inp-con form-group mt-3">
          <label htmlFor="websiteInput">Website</label>
          <input type="text" className="form-control" id="websiteInput" placeholder="Your personal website link" value={profileData.website} onChange={(e) => inputChangeHandler("website", e.target.value)} />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dateInput">Birthdate</label>
          <input type="date" className="form-control" id="dateInput" value={profileData.dateOfBirth} onChange={(e) => inputChangeHandler("dateOfBirth", e.target.value)} />
        </div>
        <div className="form-group mt-3 text-muted">
          <p>Switch to professional <i className="fa fa-arrow-right"></i></p>
        </div>
      </div>
    </div>
  );
}

export default EditProfileComponent;