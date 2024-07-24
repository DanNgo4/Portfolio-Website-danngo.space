import { db } from "../../db.js";

export const getProjectRoute = {
    path: "/api/portfolio/:projectID",
    method: "get",
    handler: async (req, res) => {
        const { projectID } = req.params;
        const user = req.user;

        try {
            const project = await db.collection("projects").findOne({ projectID });

            if (!project) return res.status(404).send("Project not found");
            
            const upvoteIDs = project.upvoteIDs || [];
            project.upvoted = user.uid && upvoteIDs.includes(user.uid); // user id/token (uid)
            res.json(project);
        } catch (e) {
            res.status(500).send("Internal Server Error: An error occurred while loading project");
        }
    }
};