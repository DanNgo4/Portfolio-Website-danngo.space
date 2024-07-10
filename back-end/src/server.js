import express from "express";

import { db, connectToDB } from "./db.js";

const app = express();
app.use(express.json());

/* app.get("/hello/:id", (req, res) => {
    const { id } = req.params;    // object destructuring
    // const id = req.params.id;
    res.send(`Hello ${id}!!`);
}); */

app.get("/api/portfolio/:id/", async (req, res) => {
    const { id } = req.params;

    const project = await db.collection("projects").findOne({ id });

    if (project) {
        res.json(project);
    } else {
        res.sendStatus(404);
    }
});

app.put("/api/portfolio/:id/upvote", async (req, res) => {
    const { id } = req.params;

    await db.collection("projects").updateOne({ id }, {
        $inc: { upvotes: 1 },   // increment upvotes by 1 sadf
    });

    const project = await db.collection("projects").findOne({ id });

    if (project) {
        res.json({ upvotes: project.upvotes });
    } else {
        res.send("That article doesn't exist");
    }
});

app.delete("/api/portfolio/:id/upvote", async (req, res) => {
    const { id } = req.params;

    await db.collection("projects").updateOne({ id }, {
        $inc: { upvotes: -1 },
    });

    const project = await db.collection("projects").findOne({ id });

    if (project) {
        res.json({ upvotes: project.upvotes });
    } else {
        res.send("That article doesn't exist");
    }
});

app.post("/api/portfolio/:id/comments", async (req, res) => {
    const { id } = req.params;
    const { postedBy, text } = req.body;

    await db.collection("projects").updateOne({ id }, {
        $push: { comments: {postedBy, text} },
    });

    const project = await db.collection("projects").findOne({ id });

    if (project) {
        res.send(project.comments);
    } else {
        res.send("That project doesn't exist");
    }
});

connectToDB(() => {
    console.log("Successfully connected to database!");
    app.listen(8000, () => {
        console.log("Server is listening on port 8000");
    });
});
