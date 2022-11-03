import React from "react";
const TuitItem = ({ item }) => {
  return (
    <div className="wd-post-box">
      <div className="d-flex flex-row">
        <div>
          <img className="wd-avatar" src={`/images/${item.avatarIcon}`} />
        </div>
        <div className="flex-fill ps-3">
          <div className="d-flex flex-row wd-post-author wd-align-items-center">
            <div className="flex-fill">
              <span className="fw-bold">{item.userName} <i className="fa text-primary fa-check-circle"></i></span>
              <span className="text-muted"> @{item.handle} &#xb7; 23h</span>
            </div>
            <div>
              <i className="fa-solid text-muted fa-ellipsis"></i>
            </div>
          </div>
          <p className="wd-post-content">
            {item.post}
            {!!item.webURL && (
              <>
                &nbsp; <i className="fa-solid fa-arrow-right-long text-muted"></i> &nbsp;
                <a href={item.webURL} target="_blank" className="text-primary">{item.webURL}</a>
              </>
            )}
          </p>
          <div className="wd-post-card">
            <img src={`/images/${item.image}`} height="264" />
            <div className={`wd-box ${item.details ? '' : 'd-none'}`}>
              <p className="fw-bold mb-0">{item.details ? item.details.title : ''}</p>
              <p className="text-muted">{item.details ? item.details.description : ''}</p>
            </div>
          </div>
          <div className="d-flex flex-row mt-3">
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-comment"></i><span className="ps-2">{item.comments}</span></a></div>
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-retweet"></i><span className="ps-2">{item.retweets}</span></a></div>
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-heart"></i><span className="ps-2">{item.likes}</span></a></div>
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-upload"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TuitItem;