import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";

const ProfileComponent = () => {
  const profileData = useSelector(state => state.profile)
  return (
    <div>
      <div className="d-flex flex-row">
        <div>
          <i className="fa fa-arrow-left text-muted p-3" />
        </div>
        <div className="flex-fill">
          <p className="fw-bold m-0">{profileData.firstName} {profileData.lastName}</p>
          <p className="text-muted small m-0">{profileData.tuitsCount} tuits</p>
        </div>
      </div>
      <div className="position-relative">
        <img className="img-fluid" src={`/images/${profileData.bannerPicture}`} alt="profile banner" />
        <div className="position-absolute wd-dp-box">
          <img src={`/images/${profileData.profilePicture}`} className="wd-dp img-fluid" />
        </div>
        <div className="d-flex justify-content-end pt-3">
          <Link to="/tuiter/edit-profile" type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Edit Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;