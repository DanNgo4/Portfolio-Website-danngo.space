import { useState } from "react";

const ProjectCommentForm = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    return (
        <section className="">
            <h2 className="font-bold text-2xl mb-4">Add a comment</h2>

            <form onSubmit={(e) => {e.preventDefault()}}>
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

                <button className="w-[70vw] md:w-96 h-14 rounded bg-[var(--apple-black)] text-[var(--apple-white)]">Add Comment</button>
            </form>
        </section>
    );
};

export default ProjectCommentForm;