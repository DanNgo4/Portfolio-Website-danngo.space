import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { backendURL } from "../../backendURL";

import ThumbUp from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOff from "@mui/icons-material/ThumbUpOffAlt";

import TogglableBtn from "../TogglableBtn";

const ProjectUpvote = ({ projectID, initialUpvotes, initialUpvoted, onUpdateUpvotes, token }) => {

    const [upvotes, setUpvotes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setUpvotes(initialUpvotes); // Update upvotes after initial render
    }, [initialUpvotes]);

    useEffect(() => {
        setLiked(initialUpvoted);
    }, [initialUpvoted]);

    const toggleUpvote = async () => {
        try {
            const headers = token ? { authtoken: token } : {};

            let res;
            if (liked) {
                res = await axios.delete(`${backendURL}/api/portfolio/${projectID}/decrement-upvote`, {headers});
            } else {
                res = await axios.put(`${backendURL}/api/portfolio/${projectID}/increment-upvote`, null, {headers});
                // null is request's body
            }
            const updatedProject = res.data;
            onUpdateUpvotes(updatedProject);
            setLiked(!liked);
        } catch (e) {
            console.error("Error updating upvotes");
        }
    };

    return (
        <section className="flex justify-center mb-4">
            {
                token ? <TogglableBtn 
                            Btn1={<ThumbUpOff />} 
                            Btn2={<ThumbUp />} 
                            style={{color: "#1975D2"}}
                            state={liked}
                            setState={setLiked}
                            callback={toggleUpvote}
                        />
                      : <Link to="/log-in">
                            <button className="border-2 border-[var(--apple-black)] p-2 hover:bg-white duration-500">
                                Log In to upvote
                            </button>
                        </Link>
            }

            <p className="p-2">This project has <span className="text-[#1976D2] font-bold">{upvotes}</span> upvote(s)</p>
        </section>
    );
};

export default ProjectUpvote;
