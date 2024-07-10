import { useState } from "react";

import axios from "axios";

const ProjectCommentForm = ({ projectID, onAddComment }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const addComment = async () => {
        try {
            const res = await axios.post(
                `/api/portfolio/${projectID}/comments`,
                {
                    postedBy: name,
                    text: comment,
                }
            );
            const updatedProject = res.data;
            onAddComment(updatedProject);
            setName("");
            setComment("");
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    return (
        <section className="">
            <h2 className="font-bold text-2xl mb-4">Add a comment</h2>

            <form /* onSubmit={(e) => {e.preventDefault()}} */>
                <p>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="project-input-box h-12"
                    />
                </p>

                <p>
                    <label htmlFor="comment">Comment:</label><br />
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        rows="5"
                        className="project-input-box"
                    />
                </p>

                <button onClick={addComment} className="w-[70vw] md:w-96 h-14 rounded bg-[var(--apple-black)] text-[var(--apple-white)]">Add Comment</button>
            </form>
        </section>
    );
};

export default ProjectCommentForm;