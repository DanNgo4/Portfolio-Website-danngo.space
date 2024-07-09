const ProjectCommentsList = ({ comments }) => {
    return (
        <section>
            <h2>Comments:</h2>
            {comments.map(comment => (
            <div className="border border-solid border-black p-4 border-t-0 border-r-0 border-b-2 border-l-0" key={comment.postedBy + ": " +comment.text}>
                <h3>{comment.postedBy}</h3>
                <p>{comment.text}</p>
            </div>
        ))}
        </section>
    );
};

export default ProjectCommentsList;