import { useState } from "react";

const ProjectCommentForm = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    return (
        <section>
            <h2 className="font-bold text-2xl mb-4">Add a comment</h2>

            <form onSubmit={(e) => {e.preventDefault()}}>
                <p>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="project-input-box w-96 h-12"
                    />
                </p>

                <p>
                    <label htmlFor="comment">Comment:</label><br />
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        rows="5"
                        cols="36"
                        className="project-input-box"
                    />
                </p>

                <button className="w-96 h-14 rounded bg-[var(--apple-black)] text-[var(--apple-white)]">Add Comment</button>
            </form>
        </section>
    );
};

export default ProjectCommentForm;