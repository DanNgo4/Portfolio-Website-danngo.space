import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import DOMPurify from "dompurify";

const ProjectCommentForm = ({ projectID, onAddComment, user, token }) => {
    const navigate=  useNavigate();

    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (user) {
            setEmail(user.email);
        }
    }, [user]);

    const sanitiseInput = (input) => DOMPurify.sanitize(input);

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const sanitisedComment = { 
                postedBy: sanitiseInput(email),
                text: sanitiseInput(comment)
            };
            const headers = token ? { authtoken: token } : {};

            const res = await axios.post(
                `/api/portfolio/${projectID}/comments`,

                sanitisedComment,

                { headers }
            );
            const updatedProject = res.data;
            onAddComment(updatedProject);
            setEmail("");
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
                        className="project-input-box"
                    />
                </p>

                {
                    token ? <input
                                type="submit"
                                value="Add Comment"
                                disabled={!comment}
                                className="w-[70vw] md:w-96 h-14 rounded bg-[var(--apple-black)] text-[var(--apple-white)]" 
                            />
                          : <button
                                onClick={() => navigate("/log-in")}
                                className="border-2 border-[var(--apple-black)] hover:bg-white duration-500 p-4"
                            >
                                Log In to comment
                            </button>
                }

                
            </form>
        </section>
    );
};

export default ProjectCommentForm;