import { db } from "../../db.js";

export const incrementProjectUpvoteRoute = {
    path: "/api/portfolio/:projectID/increment-upvote",
    method: "put",
    handler: async (req, res) => {
        const { projectID } = req.params;
    
        await db.collection("projects").updateOne({ projectID }, {
            $inc: { upvotes: 1 },   // increment upvotes by 1 sadf
        });
    
        const project = await db.collection("projects").findOne({ projectID });
    
        if (project) {
            res.json({ upvotes: project.upvotes });
        } else {
            res.send("That article doesn't exist");
        }
    }
};

export const decrementProjectUpvoteRoute = {
    path: "/api/portfolio/:projectID/decrement-upvote",
    method: "delete",
    handler: async (req, res) => {
        const { projectID } = req.params;
    
        await db.collection("projects").updateOne({ projectID }, {
            $inc: { upvotes: -1 },
        });
    
        const project = await db.collection("projects").findOne({ projectID });
    
        if (project) {
            res.json({ upvotes: project.upvotes });
        } else {
            res.send("That article doesn't exist");
        }
    }
};