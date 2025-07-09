import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./Welcome";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);
    const [dataFetched, setDataFetched] = useState(false)

    if (!dataFetched) {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
            });
            setDataFetched(true)
        }

    return (
        <div className="container mt-5">
            {postList.length === 0 && (
                <WelcomeMessage />
            )}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
