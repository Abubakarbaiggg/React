import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate()

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";
    console.log("sending post to server");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log("Got response from server" , post);
        addPost(post);
        navigate("/")
      });
  };
  return (
    <>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id Here
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="Your User Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            ref={postBodyElement}
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Number Of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Your Hashtags Here
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={tagsElement}
            placeholder="Please enter tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
