import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  const updateLikes = (tuit) => {
    if (tuit.liked) {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes - 1,
        liked: false,
      }));
    } else {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
        liked: true,
      }));
    }
  }

  const updateDislikes = (tuit) => {
    if (tuit.disliked) {
      dispatch(updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes - 1,
        disliked: false,
      }));
    } else {
      dispatch(updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1,
        disliked: true,
      }));
    }
  }

  return (
    <div className="wd-post-box">
      <div className="d-flex flex-row">
        <div>
          <img className="wd-avatar" src={`/images/${item.image || 'default.png'}`} />
        </div>
        <div className="flex-fill ps-3">
          <div className="d-flex flex-row wd-post-author wd-align-items-center">
            <div className="flex-fill">
              <span className="fw-bold">{item.userName} <i className="fa text-primary fa-check-circle"></i></span>
              <span className="text-muted"> @{item.handle || "user"} &#xb7; {item.time}</span>
            </div>
            <div>
              <i className="fa-solid text-muted fa-times" onClick={() => deleteTuitHandler(item._id)}></i>
              {/* {!!item.deletable && <i className="fa-solid text-muted fa-times" onClick={() => deleteTuitHandler(item._id)}></i>} */}
            </div>
          </div>
          <p className="wd-post-content">
            {item.tuit}
            {!!item.webURL && (
              <>
                &nbsp; <i className="fa-solid fa-arrow-right-long text-muted"></i> &nbsp;
                <a href={item.webURL} target="_blank" className="text-primary">{item.webURL}</a>
              </>
            )}
          </p>
          <div className="d-flex flex-row mt-3">
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-comment"></i><span className="ps-2">{item.replies}</span></a></div>
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-retweet"></i><span className="ps-2">{item.retuits}</span></a></div>
            <div className="flex-fill"><a href="#" className={`${item.liked ? "text-danger" : "text-muted"} text-decoration-none`} onClick={() => updateLikes(item)}><i className="fa-solid fa-heart"></i><span className="ps-2">{item.likes}</span></a></div>
            <div className="flex-fill"><a href="#" className={`${item.disliked ? "text-danger" : "text-muted"} text-decoration-none`} onClick={() => updateDislikes(item)}><i className="fa-solid fa-thumbs-down"></i><span className="ps-2">{item.dislikes}</span></a></div>
            <div className="flex-fill"><a href="#" className="text-muted text-decoration-none"><i className="fa-solid fa-share-nodes"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TuitItem;