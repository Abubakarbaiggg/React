import { useReducer, createContext } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }else if(action.type === "Add_POST"){
        newPostList = [action.payload,...currPostList]
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST
    );

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        console.log(`${userId},${postTitle},${postBody},${reactions},${tags}`);
        dispatchPostList({
            type: "Add_POST",
            payload: {
                id:Date.now() ,
                title: postTitle,
                body: postBody,
                reactions:reactions,
                userId: userId,
                tags: tags,
            }
        })
    };

    const deletePost = (postId) => {
        console.log(`Deleted post called for : ${postId}`);
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

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

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going To Karachi",
        body: "Hi Friends, I am going to Karachi for my vacations. Hope to enjoy a lot. Please out",
        reactions: 2,
        userId: "user-9",
        tags: ["vacation", "karachi", "Enjoying"],
    },
    {
        id: "2",
        title: "Pass ho bhai",
        body: "4 saal ki masti k baad bhi ho gaye hain pass. Hard to believe",
        reactions: 15,
        userId: "user-12",
        tags: ["Graduating", "Unbelievable", "Enjoying"],
    },
];

export default PostListProvider;
