const WhoToFollowListItem = (item) => {
  return (`
    <li class="list-group-item">
      <div class="d-flex flex-row align-items-center">
        <img src="./${item.avatarIcon}" width="48" height="48" class="rounded-circle" />
        <div class="flex-fill ps-1">
          <p class="fw-bold">${item.userName} <i class="fa fa-check-circle"></i></p>
          <p class="text-muted">@${item.handle}</p>
        </div>
        <button type="button" class="btn btn-primary btn-sm rounded-pill">Follow</button>
      </div>
    </li>`
  );
}
export default WhoToFollowListItem;