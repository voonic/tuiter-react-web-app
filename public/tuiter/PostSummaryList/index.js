import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./post.js"
const PostSummaryList = () => {
  return (`
    <!-- The center part content of posts -->
    <ul class="list-group">
      ${exploreItems.map(item => {
    return PostSummaryItem(item);
  }).join('')
    }
    </ul>
`);
}

export default PostSummaryList;