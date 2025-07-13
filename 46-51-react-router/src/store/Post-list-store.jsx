import {
  useReducer,
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "Add_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    console.log("add post called", post);
    dispatchPostList({
      type: "Add_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "Add_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };



  const deletePost = useCallback(
    (postId) => {
      console.log(`Deleted post called for : ${postId}`);
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  const arr = [5, 2, 5, 2, 1];
  const stordArr = useMemo(() => arr.sort(), [arr]);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
