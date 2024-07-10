import { useState, useEffect } from "react";

import axios from "axios";

import IconButton from "@mui/material/IconButton";
import ThumbUp from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOff from "@mui/icons-material/ThumbUpOffAlt";

const ProjectUpvote = ({ initialUpvotes, projectID }) => {
    const [like, setLike] = useState(false);
    const [upvotes, setUpvotes] = useState(0);

    useEffect(() => {
        setUpvotes(initialUpvotes); // Update upvotes after initial render
    }, [initialUpvotes]);

    const toggleUpvote = async () => {
        setLike(!like);

        try {
            const url = `/api/portfolio/${projectID}/upvote`;
            const method = like ? 'DELETE' : 'PUT';
            const res = await axios({ method, url });
            setUpvotes(res.data.upvotes); 
        } catch (error) {
            console.error("Error updating upvotes:", error);
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
