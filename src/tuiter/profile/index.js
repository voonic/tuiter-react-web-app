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
        <div className="position-absolute wd-dp-box ms-3">
          <img src={`/images/${profileData.profilePicture}`} className="wd-dp img-fluid" />
        </div>
        <div className="d-flex justify-content-end pt-3 me-3">
          <Link to="/tuiter/edit-profile" type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Edit Profile</Link>
        </div>
      </div>
      <div className="ms-3 me-3">
        <h6 className="mb-0 mt-4 fw-bold">{profileData.firstName} {profileData.lastName}</h6>
        <p className="text-muted small m-0">@{profileData.handle}</p>
        <p className="mt-3">{profileData.bio}</p>
        <div className="mt-3 d-flex flex-row text-muted">
          <span className="pe-3">
            <i className="fa fa-location-dot" /> {profileData.location}
          </span>
          <span className="pe-3">
            <i className="fa fa-cake-candles" /> Born: {profileData.dateOfBirth}
          </span>
          <span className="pe-3">
            <i className="fa fa-calendar" /> Joined: {profileData.dateJoined}
          </span>
        </div>
        <div className="mt-3 d-flex flex-row text-muted">
          <span className="pe-3">
            <b className="text-dark">{profileData.followingCount}</b> Following
          </span>
          <span className="pe-3">
            <b className="text-dark">{profileData.followersCount}</b> Followers
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;