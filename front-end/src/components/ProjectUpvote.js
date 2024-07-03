import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const ProjectUpvote = () => {
    const [projectInfo] = useState({ upvotes: 0 });
    const [like, setLike] = useState(false);

    const toggleUpvote = () => {
        setLike(!like);

        if (!like) {
            projectInfo.upvotes++;
        } else {
            projectInfo.upvotes--;
        }
    };

    return (
        <section className="flex justify-center">
            <IconButton color="primary" onClick={toggleUpvote}>
                {like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
            </IconButton>

            <p className="p-2">This project has <span className="text-[#1976D2] font-bold">{projectInfo.upvotes}</span> upvotes(s)</p>
        </section>
    );
};

export default ProjectUpvote;