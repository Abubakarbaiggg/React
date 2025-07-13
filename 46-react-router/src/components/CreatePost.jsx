import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);


  return (
    <>
      <Form className="container mt-5" method="POST">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id Here
          </label>
          <input
            type="text"
            className="form-control"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            id="tags"
            name="tags"
            placeholder="Please enter tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};
export async function createPostAction(data){
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  })
    .then((res) => res.json())
    .then((post) => {
      console.log("Got response from server", post);
    });
  return redirect("/")
};
export default CreatePost;
