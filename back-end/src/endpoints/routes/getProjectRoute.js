import { db } from "../../db.js";

export const getProjectRoute = {
    path: "/api/portfolio/:projectID",
    method: "get",
    handler: async (req, res) => {
        const { projectID } = req.params;
        const { uid } = req.user;

        const project = await db.collection("projects").findOne({ projectID });

        if (project) {
            const upvoteIDs = project.upvoteIDs || [];
            const upvoted = uid && upvoteIDs.includes(uid);
            // project.upvoted = uid && !upvoteIDs.include(uid);
            res.json({...project, upvoted});
        } else {
            res.sendStatus(404);
        }
    }
};