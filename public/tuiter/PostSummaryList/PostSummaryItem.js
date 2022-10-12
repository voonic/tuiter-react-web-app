const PostSummaryItem = (item) => {
  return (`
    <li class="list-group-item">
      <div class="d-flex flex-row p-2">
        <div class="flex-fill">
          <p class="text-muted">${item.topic}</p>
          <p><span class="fw-bold">${item.userName}</span> <i class="fa fa-check-circle"></i><span class="text-muted"> -
              ${item.time}</span></p>
          <p class="fw-bold">${item.title}</p>
        </div>
        <div class="ps-2">
          <img src="${item.image}" class="wd-img" />
        </div>
      </div>
    </li>
  `);
}
export default PostSummaryItem;