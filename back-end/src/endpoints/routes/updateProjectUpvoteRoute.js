import { db } from "../../db.js";

export const incrementProjectUpvoteRoute = {
    path: "/api/portfolio/:projectID/increment-upvote",
    method: "put",
    handler: async (req, res) => {
        const { projectID } = req.params;
        const user = req.user;

        // backend validations
        if (!user || !user.uid) {
            return res.status(401).send("Unauthorised: No user information found");
        }

        try {
            const project = await db.collection("projects").findOne({ projectID });

            if (!project) return res.status(404).send("Project not found");

            const upvoteIDs = project.upvoteIDs || [];
            const upvoted = upvoteIDs.includes(user.uid);  // user id/token (uid)
            
            if (!upvoted) {
                await db.collection("projects").updateOne({ projectID }, {
                    $inc: { upvotes: 1 },   // increment upvotes by 1
                    $push: { upvoteIDs: user.uid }
                });
            }

            const updatedProject = await db.collection("projects").findOne({ projectID });  // fetch the updated project to return
            res.json({ ...updatedProject, upvoted: !upvoted }); 
        } catch (e) {
            res.status(500).send("Internal Server Error: An error occurred while upvoting project");
        }
    }
};

export const decrementProjectUpvoteRoute = {
    path: "/api/portfolio/:projectID/decrement-upvote",
    method: "delete",
    handler: async (req, res) => {
        const { projectID } = req.params;
        const user = req.user;

        // backend validations
        if (!user || !user.uid) {
            return res.status(401).send("Unauthorised: No user information found");
        }

        try {
            const project = await db.collection("projects").findOne({ projectID });

            if (!project) return res.status(404).send("Project not found");

            const upvoteIDs = project.upvoteIDs || [];
            const upvoted = upvoteIDs.includes(user.uid);  // user id/token (uid)
            
            if (upvoted) {
                await db.collection("projects").updateOne({ projectID }, {
                    $inc: { upvotes: -1 },   // decrement upvotes by 1
                    $pull: { upvoteIDs: user.uid }
                });
            }

            const updatedProject = await db.collection("projects").findOne({ projectID });  // fetch the updated project to return
            res.json({ ...updatedProject, upvoted: !upvoted }); 
        } catch (e) {
            res.status(500).send("Internal Server Error: An error occurred while downvoting project")
        }
    }
};