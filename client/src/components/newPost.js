import { Link } from "react-router-dom";
import { PostForm } from "./PostForm";

export function NewPost() {
    return (
        <>
            <Link to="/"><button> &lt; Return Home </button></Link>
            <h1>New Post</h1>
            <PostForm></PostForm>
        </>

    )
}