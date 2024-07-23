import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import ThumbUp from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOff from "@mui/icons-material/ThumbUpOffAlt";

import TogglableBtn from "../TogglableBtn";

const ProjectUpvote = ({ projectID, initialUpvotes, initialUpvoted, onUpdateUpvotes, token }) => {
    const navigate = useNavigate();

    const [upvotes, setUpvotes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setUpvotes(initialUpvotes); // Update upvotes after initial render
    }, [initialUpvotes]);

    useEffect(() => {
        setLiked(initialUpvoted);
    }, [initialUpvoted]);


    useEffect(() => {
        const fetchUpvotedStatus = async () => {
            try {
                const headers = token ? { authtoken: token } : {};
                const response = await axios.get(`/api/portfolio/${projectID}`, { headers });
                const { upvoted } = response.data;
                setLiked(upvoted);
            } catch (error) {
                console.error("Error fetching upvoted status", error);
            }
        };

        if (token) {
            fetchUpvotedStatus();
        }
        
    }, [projectID, token]);

    const toggleUpvote = async () => {
        try {
            const headers = token ? { authtoken: token } : {};
            let res;
            if (liked) {
                res = await axios.delete(`/api/portfolio/${projectID}/decrement-upvote`, {headers});
            } else {
                res = await axios.put(`/api/portfolio/${projectID}/increment-upvote`, null, {headers});
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
                      : <button 
                            onClick={() => navigate("/log-in")}
                            className="border-2 border-[var(--apple-black)] p-2 hover:bg-white duration-500"
                        >
                            Log In to upvote
                        </button>
            }

            <p className="p-2">This project has <span className="text-[#1976D2] font-bold">{upvotes}</span> upvote(s)</p>
        </section>
    );
};

export default ProjectUpvote;
