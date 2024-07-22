import { db } from "../../db.js";

export const getProjectRoute = {
    path: "/api/portfolio/:projectID",
    method: "get",
    handler: async (req, res) => {
        const { projectID } = req.params;

        const project = await db.collection("projects").findOne({ projectID });

        if (project) {
            res.json(project);
        } else {
            res.sendStatus(404);
        }
    }
};