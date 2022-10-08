import { useState } from "react"

export function PostForm({
    loading,
    error,
    onSubmit,
    autoFocus = false,
    initialValue = "",
}) {
    const [message, setMessage] = useState(initialValue)

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(message).then(() => setMessage(""))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-post-form-row">
                <div className="title-cont">
                    <label className="title-label">Post Title</label>
                    <textarea className="title-input"></textarea>
                </div>
                <div className="subject-cont">
                    <label className="subject-label">Message</label>
                    <textarea
                        autoFocus={autoFocus}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="subject-input"
                    />
                    <button className="newpost-btn" type="submit" disabled={loading}>
                        {loading ? "Loading" : "Post"}
                    </button>
                </div>

            </div>
            <div className="error-msg">{error}</div>
        </form>
    )
}