import { useState } from "react";

import axios from "axios";
import DOMPurify from "dompurify";

const ProjectCommentForm = ({ projectID, onAddComment }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const sanitiseInput = (input) => DOMPurify.sanitize(input);

    const addComment = async () => {
        try {
            const res = await axios.post(
                `/api/portfolio/${projectID}/comments`,
                {
                    postedBy: sanitiseInput(name),
                    text: sanitiseInput(comment),
                }
            );
            const updatedProject = res.data;
            onAddComment(updatedProject);
            setName("");
            setComment("");
        } catch (e) {
            console.error("Error updating comment");
        }
    };

    return (
        <section id="Feedback">
            <h2 className="font-bold text-2xl mb-4">Add a comment</h2>

            <form>
                <p>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        required
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
                        required
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        rows="5"
                        className="project-input-box"
                    />
                </p>

                <input
                    type="submit"
                    value="Add Comment"
                    disabled={!name || !comment}
                    onClick={addComment}
                    className="w-[70vw] md:w-96 h-14 rounded bg-[var(--apple-black)] text-[var(--apple-white)]" 
                />
            </form>
        </section>
    );
};

export default ProjectCommentForm;