const ProjectCommentsList = ({ comments = [] }) => {
    return (
        <section>
            <h2 className="font-bold text-2xl my-4" id="Comments">Comments:</h2>

            {comments.map((comment, i) => (
                <div className="border border-black p-4 border-t-0 border-r-0 border-b-2 border-l-0 mb-4" key={i}>
                    <h3 className="font-semibold text-xl">
                        {comment.postedBy} commented at {comment.postedAt}
                    </h3>

                    <p className="whitespace-pre-wrap break-words overflow-hidden text-ellipsis">
                        {comment.text}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default ProjectCommentsList;