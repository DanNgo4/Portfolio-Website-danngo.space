import { useState } from "react";

const ProjectCommentForm = () => {
    return (
        <section className="max-w-[50vw] text-left ml-[25vw]">
            <h2 className="font-bold text-2xl mb-4">Add a comment</h2>

            <form>
                <p>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        id="name"
                        type="text"
                        className="project-input-box w-96 h-10"
                    />
                </p>

                <p>
                    <label htmlFor="comment">Comment:</label><br />
                    <textarea
                        id="comment"
                        rows="4"
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