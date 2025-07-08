import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/Post-list-store";
const CreatePost = () => {

   const{addPost} =  useContext(PostList)

    const userId = useRef();
    const postTitle = useRef();
    const postBody = useRef();
    const reactions = useRef();
    const tags = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return <>
        <form className="container mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter Your User Id Here</label>
                <input type="text" className="form-control" ref={userId} id="userId"  placeholder="Your User Id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="title" ref={postTitle}  placeholder="How are you feeling today..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" className="form-control" id="body" ref={postBody} placeholder="Tell us more about it"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Number Of Reactions</label>
                <input type="text" className="form-control" id="reactions" ref={reactions} placeholder="How many people reacted to this post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter Your Hashtags Here</label>
                <input type="text" className="form-control" id="reactions" ref={tags}  placeholder="Please enter tags using space"/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    </>
}
export default CreatePost;