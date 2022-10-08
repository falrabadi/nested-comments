import { Link } from "react-router-dom"
import { PostForm } from "./PostForm"

export function Navbar() {
    return (
        <div className="navbar">
            <h1 className="siteName">Test</h1>
            <Link to="/newPost">
                <button
                    className="new-post-btn"
                    onClick={() => { PostForm() }}>New Post</button>
            </Link>
        </div>
    )
}