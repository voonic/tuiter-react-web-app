import React from "react";
import posts from "./post"
import PostItem from "./postItem";
const PostList = () => {
  return (
    <div>
      {posts.map(item => {
        return <PostItem key={item._id} item={item} />
      })}
    </div>
  );
}

export default PostList;