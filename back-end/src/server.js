import express from "express";
import fs from "fs";
import admin from "firebase-admin";

import { getProjectEndpoint, endpoints } from "./endpoints/endpoints.js";
import { connectToDB } from "./db.js";

// For production
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentials = JSON.parse(
    fs.readFileSync("./ignore/credentials.json")
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());

// For production
app.use(express.static(path.join(__dirname, "../build")));
app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.use( async (req, res, next) => {
    const { authToken } = req.headers;

    if (authToken) {
        try {
            req.user = await admin.auth().verifyIdToken(authToken);
        } catch (e) {
            return res.sendStatus(400);
        }
    }

    req.user = req.user || {};

    next();
});

app[getProjectEndpoint.method](getProjectEndpoint.path, getProjectEndpoint.handler);

app.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
});

endpoints.forEach(endpoint => {
    app[endpoint.method](endpoint.path, endpoint.handler);
});

// Connect to the database, then start the server.
// This prevents creating a new DB connection for every request.
connectToDB(() => {
    console.log("Successfully connected to database!");
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
