import { useState, useEffect } from "react";

import axios from "axios";

import IconButton from "@mui/material/IconButton";
import ThumbUp from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOff from "@mui/icons-material/ThumbUpOffAlt";

import TogglableBtn from "../TogglableBtn";

const ProjectUpvote = ({ initialUpvotes, projectID }) => {
    const [liked, setLiked] = useState(false);
    const [upvotes, setUpvotes] = useState(0);

    useEffect(() => {
        setUpvotes(initialUpvotes); // Update upvotes after initial render
    }, [initialUpvotes]);

    const toggleUpvote = async () => {
        try {
            let res;
            if (liked) {
                res = await axios.delete(`/api/portfolio/${projectID}/decrement-upvote`);
            } else {
                res = await axios.put(`/api/portfolio/${projectID}/increment-upvote`);
            }
            setUpvotes(res.data.upvotes); 
            setLiked(!liked);
        } catch (e) {
            console.error("Error updating upvotes");
        }
    };

    return (
        <section className="flex justify-center">
            <TogglableBtn 
                Btn1={<ThumbUpOff />} 
                Btn2={<ThumbUp />} 
                style={{color: "#1975D2"}}
                callback={toggleUpvote}
            />

            {/* <IconButton color="primary">
                {liked ? <ThumbUp /> : <ThumbUpOff />}
            </IconButton> */}
            <p className="p-2">This project has <span className="text-[#1976D2] font-bold">{upvotes}</span> upvote(s)</p>
        </section>
    );
};

export default ProjectUpvote;
