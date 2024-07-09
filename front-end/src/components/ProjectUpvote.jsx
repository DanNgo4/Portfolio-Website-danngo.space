import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import ThumbUp from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOff from "@mui/icons-material/ThumbUpOffAlt";

const ProjectUpvote = ({ initialUpvotes }) => {
    const [like, setLike] = useState(false);
    const [upvotes, setUpvotes] = useState(initialUpvotes);

    const toggleUpvote = () => {
        setLike(!like);

        if (!like) {
            setUpvotes(upvotes + 1);
        } else {
            setUpvotes(upvotes - 1);
        }
    };

    return (
        <section className="flex justify-center">
            <IconButton color="primary" onClick={toggleUpvote}>
                {like ? <ThumbUp /> : <ThumbUpOff />}
            </IconButton>
            <p className="p-2">This project has <span className="text-[#1976D2] font-bold">{upvotes}</span> upvote(s)</p>
        </section>
    );
};

export default ProjectUpvote;
