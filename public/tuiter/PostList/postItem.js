const PostItem = (item) => {
  return (`
    <div class="wd-post-box">
      <div class="d-flex flex-row">
        <div>
          <img class="wd-avatar" src="../bob.png" />
        </div>
        <div class="flex-fill ps-3">
          <div class="d-flex flex-row wd-post-author wd-align-items-center">
            <div class="flex-fill">
              <span class="text-white">Robert Zubrin <i class="fa fa-check-circle"></i></span>
              <span class="text-muted">@robert_zubrin &#xb7; 23h</span>
            </div>
            <div class="wd-light-gray">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p class="wd-post-content text-white">
            Amazing show about dhoom 3
          </p>
          <div class="wd-post-card">
            <img src="../banner.jpeg" height="264" />
            <div class="wd-box">
              <p class="wd-title">What is Lorem Ipsum?</p>
              <p class="wd-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of
                type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-between">
            <div class="wd-flex1"><a href="#">&#128172;<span class="wd-numbers">22</span></a></div>
            <div class="wd-flex1"><a href="#">&#8645;<span class="wd-numbers">9</span></a></div>
            <div class="wd-flex1"><a href="#" class="wd-active">&#9829;<span class="wd-numbers">37</span></a></div>
            <div class="wd-flex1"><a href="#">&#8682;</a></div>
          </div>
        </div>
      </div>
    </div>
  `);
}
export default PostItem;