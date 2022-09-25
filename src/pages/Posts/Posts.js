import React, { useEffect, useState } from "react";
import PostBox from "../../components/PostBox/PostBox";
import "./Posts.css";
import FetchPosts from "../../data/Posts.json";

const Posts = () => {
  const [posts, changePosts] = useState([]);

  useEffect(() => {
    changePosts(FetchPosts.events);
    console.log(FetchPosts.events);
  }, []);

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div className="postGrid">
        {posts.map((post) => {
          return (
            <PostBox
              image_url={post.image_src}
              title={post.name}
              date={post.date}
              id={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
