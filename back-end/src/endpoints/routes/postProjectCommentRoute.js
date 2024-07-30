import sanitizeHtml from "sanitize-html";

import { db } from "../../db.js";

export const postProjectCommentRoute = {
    path: "/api/portfolio/:projectID/comments",
    method: "post",
    handler: async (req, res) => {
        const { projectID } = req.params;
        const { text } = req.body;
        const user = req.user;

        // backend validations
        if (!user || !user.uid) {
            return res.status(401).send("Unauthorised: No user information found");
        }

        if (!text || typeof text !== "string") {
            return res.status(400).send("Bad Request: Comment text is required and must be a string");
        }

        const { email } = user;

        /* const formatDate = (dateString) => {
            const date = new Date(dateString);
            
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const day = date.getDate();
            const month = date.toLocaleString("default", { month: "long" });
            const year = date.getFullYear();
        
            const formattedHours = hours < 10 ? '0' + hours : hours;
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const formattedDay = day < 10 ? '0' + day : day;

            return `${formattedHours}:${formattedMinutes} ${formattedDay}-${month}-${year}`;
        }; */

        let date = new Date();
        const melbourneDate = date.toLocaleString("en-AU", {timeZone: "Australia/Melbourne"})

        const sanitisedComment = {
            postedBy: sanitizeHtml(email),
            postedAt: melbourneDate,
            text: sanitizeHtml(text),
        };

        try {
            const project = await db.collection("projects").findOne({ projectID });

            if (!project) return res.status(404).send("Project not found");

            await db.collection("projects").updateOne({ projectID }, {
                $push: { comments: sanitisedComment },
            });

            const updatedProject = await db.collection("projects").findOne({ projectID });  // fetch the updated project to return
            res.json(updatedProject);
        } catch (e) {
            res.status(500).send("Internal Server Error: An error occurred while posting the comment");
        }
    }
};