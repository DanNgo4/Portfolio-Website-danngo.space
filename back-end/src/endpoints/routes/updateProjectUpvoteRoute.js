import { db } from "../../db.js";

export const incrementProjectUpvoteRoute = {
    path: "/api/portfolio/:projectID/increment-upvote",
    method: "put",
    handler: async (req, res) => {
        try {
            const { projectID } = req.params;
            const { uid } = req.user;

            if (!uid) {
                return res.send("User hasn't logged in");
            } 

            const project = await db.collection("projects").findOne({ projectID });
        
            if (project) {
                const upvoteIDs = project.upvoteIDs || [];
                const upvoted = uid && upvoteIDs.includes(uid);

                if(!upvoted) {
                    await db.collection("projects").updateOne({ projectID }, {
                        $inc: { upvotes: 1 },   // increment upvotes by 1
                        $push: { upvoteIDs: uid }
                    });
                }
                const updatedProject = await db.collection("projects").findOne({ projectID });
                res.json({ ...updatedProject, upvoted: !upvoted });
            } else {
                return res.status(400).send("That article doesn't exist");
            }
        } catch (e) {
            console.error(e);
        }
    }
};

export const decrementProjectUpvoteRoute = {
    path: "/api/portfolio/:projectID/decrement-upvote",
    method: "delete",
    handler: async (req, res) => {
        try {
            const { projectID } = req.params;
            const { uid } = req.user;

            if (!uid) {
                return res.send("User hasn't logged in");
            }
        
            const project = await db.collection("projects").findOne({ projectID });
        
            if (project) {
                const upvoteIDs = project.upvoteIDs || [];
                const upvoted = uid && upvoteIDs.includes(uid);

                if (upvoted) {
                    await db.collection("projects").updateOne({ projectID }, {
                        $inc: { upvotes: -1 },
                        $pull: { upvoteIDs: uid }
                    });
                }

                const updatedProject = await db.collection("projects").findOne({ projectID });
                res.json({ ...updatedProject, upvoted: !upvoted });
            } else {
                return res.send("That article doesn't exist");
            }
        } catch (e) {
            console.error(e);
        }
    }
};