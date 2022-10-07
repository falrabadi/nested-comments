import { PostForm } from "./PostForm"

export function Navbar() {
    return (
        <div className="navbar">
            <h1 className="siteName">Test</h1>
            <button
                className="new-post-btn"
                onClick={() => { PostForm() }}>New Post</button>
        </div>
    )
}