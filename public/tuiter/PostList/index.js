import posts from "./post.js"
import PostItem from "./postItem.js";
const PostList = () => {
  return (`
    <!-- The center part content of posts -->
    <div>
      ${posts.map(item => {
    return PostItem(item);
  }).join('')
    }
    </div>
`);
}

export default PostList;