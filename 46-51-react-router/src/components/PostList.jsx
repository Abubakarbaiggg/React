import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./Welcome";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <div className="container mt-5">
      { postList.length === 0 && <WelcomeMessage />}
      { postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
