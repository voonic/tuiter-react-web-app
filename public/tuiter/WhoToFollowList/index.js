import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
    <!-- The right part content of whom to follow-->
    <ul class="list-group">
      <li class="list-group-item">
        <span class="fw-bold">Who to follow</span>
      </li>
      ${who.map(item => {
    return WhoToFollowListItem(item);
  }).join('')
    }
    </ul>
`);
}

export default WhoToFollowList;