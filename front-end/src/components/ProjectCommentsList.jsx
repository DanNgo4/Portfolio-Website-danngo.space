const ProjectCommentsList = ({ comments }) => {
    if (!comments) {
        comments = [];
    }

    return (
        <section>
            <h2 className="font-bold text-2xl my-4" id="Comments">Comments:</h2>

            {comments.map(comment => (
            <div className="border border-solid border-black p-4 border-t-0 border-r-0 border-b-2 border-l-0 mb-4" key={comment.postedBy + ": " + comment.text}>
                <h3 className="font-semibold text-xl">{comment.postedBy}</h3>
                <p>{comment.text}</p>
            </div>
        ))}
        </section>
    );
};

export default ProjectCommentsList;