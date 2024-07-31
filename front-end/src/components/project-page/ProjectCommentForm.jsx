import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { backendURL } from "../../backendURL";

import { sanitiseInput } from "../../utils/sanitiseInput";

const ProjectCommentForm = ({ projectID, callback, user, token }) => {
    const [comment, setComment] = useState("");

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const sanitisedComment = { 
                postedBy: sanitiseInput(user.email),
                text: sanitiseInput(comment)
            };
            
            const headers = token ? { authtoken: token } : {};

            const res = await axios.post(
                `${backendURL}/api/portfolio/${projectID}/comments`,

                sanitisedComment,

                { headers }
            );
            const updatedProject = res.data;
            callback(updatedProject);
            setComment("");
        } catch (e) {
            console.error("Error updating comment");
        }
    };

    return (
        <section id="Feedback">
            <h2 className="font-bold text-2xl mb-4">Add a comment</h2>

            <form onSubmit={addComment}>
                {token && user && <p>You are posting as {user.email}</p>}

                <p>
                    <label htmlFor="comment">Comment:</label><br />
                    <textarea
                        required
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        rows="5"
                        className="border-2 rounded-lg border-black p-2 mb-4 w-[70vw] md:w-96"
                    />
                </p>

                { token ? 
                    <input
                        type="submit"
                        value="Add Comment"
                        disabled={!comment}
                        className="w-[70vw] md:w-96 h-14 rounded bg-[var(--apple-black)] text-[var(--apple-white)]" 
                    />
                        : 
                    <Link to="/log-in">
                        <button className="border-2 border-[var(--apple-black)] hover:bg-white duration-500 p-4">
                            Log In to comment
                        </button>
                    </Link>
                }
            </form>
        </section>
    );
};

export default ProjectCommentForm;