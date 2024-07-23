import sanitizeHtml from "sanitize-html";

import { db } from "../../db.js";

export const postProjectCommentRoute = {
    path: "/api/portfolio/:projectID/comments",
    method: "post",
    handler: async (req, res) => {
        const { projectID } = req.params;
        const { text } = req.body;
        const { email } = req.user;

        const sanitisedComment = {
            postedBy: sanitizeHtml(email),
            text: sanitizeHtml(text)
        };
    
        await db.collection("projects").updateOne({ projectID }, {
            $push: { comments: sanitisedComment },
        });
    
        const project = await db.collection("projects").findOne({ projectID });
    
        if (project) {
            res.json(project);
        } else {
            res.send("That project doesn't exist");
        }
    }
};