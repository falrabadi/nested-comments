import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { Post } from "./components/Post"
import { PostList } from "./components/PostLists"
import { PostProvider } from "./contexts/PostContext"

function App() {
    return (
        <div className="container">

            <Routes>
                <Route path="/" element={<><Navbar /> <PostList /></>} />
                <Route
                    path="/posts/:id"
                    element={
                        <PostProvider>
                            <Post />
                        </PostProvider>
                    }
                />
            </Routes>
        </div>
    )
}

export default App