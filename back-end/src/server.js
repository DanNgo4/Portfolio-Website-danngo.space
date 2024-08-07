import express from "express";

import "dotenv/config";

import cors from "cors";

import fs from "fs";
import admin from "firebase-admin";

import { endpoints0, getProjectEndpoint, endpoints1 } from "./endpoints/endpoints.js";
import { connectToDB } from "./db.js";

// For production
/* import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); */

const credentials = JSON.parse(
    fs.readFileSync("./credentials.json")
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());
app.use(cors());    // Enable CORS for all routes

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    //res.send("Render succeeded!");
    res.sendStatus(200);
});

endpoints0.forEach(endpoint => {
    app[endpoint.method](endpoint.path, endpoint.handler);
});

/* app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  }); */
  
// middleware checking if user has logged in with verified token
app.use( async (req, res, next) => {
    const { authtoken } = req.headers;

    if (authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
            return res.sendStatus(400); // bad request
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

endpoints1.forEach(endpoint => {
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
