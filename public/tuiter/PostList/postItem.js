const PostItem = (item) => {
  return (`
    <div class="wd-post-box">
      <div class="d-flex flex-row">
        <div>
          <img class="wd-avatar" src="../../images/${item.avatarIcon}" />
        </div>
        <div class="flex-fill ps-3">
          <div class="d-flex flex-row wd-post-author wd-align-items-center">
            <div class="flex-fill">
              <span class="text-white">${item.userName} <i class="fa fa-check-circle"></i></span>
              <span class="text-muted">@${item.handle} &#xb7; 23h</span>
            </div>
            <div class="wd-light-gray">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p class="wd-post-content text-white">
            ${item.post}
          </p>
          <div class="wd-post-card">
            <img src="../../images/${item.image}" height="264" />
            <div class="wd-box ${item.details ? '' : 'd-none'}">
              <p class="text-white">${item.details ? item.details.title : ''}</p>
              <p class="text-muted">${item.details ? item.details.description : ''}</p>
            </div>
          </div>
          <div class="d-flex flex-row mt-3">
            <div class="flex-fill"><a href="#" class="text-muted text-decoration-none"><i class="fa-solid fa-comment"></i><span class="ps-2">${item.comments}</span></a></div>
            <div class="flex-fill"><a href="#" class="text-muted text-decoration-none"><i class="fa-solid fa-retweet"></i><span class="ps-2">${item.retweets}</span></a></div>
            <div class="flex-fill"><a href="#" class="text-muted text-decoration-none"><i class="fa-solid fa-heart"></i><span class="ps-2">${item.likes}</span></a></div>
            <div class="flex-fill"><a href="#" class="text-muted text-decoration-none"><i class="fa-solid fa-upload"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  `);
}
export default PostItem;