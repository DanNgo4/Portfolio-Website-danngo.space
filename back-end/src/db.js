/* import { MongoClient } from "mongodb";

let db;

async function connectToDB(cb) {    // cb = callback
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@danngo-space-db.kacumve.mongodb.net/?retryWrites=true&w=majority&appName=danngo-space-db`);
    await client.connect();
    db = client.db("danngo-space-db");
    cb();
}

export {
    db,
    connectToDB,
}; */

import { MongoClient } from "mongodb";

let db;

async function connectToDB(cb) {    // cb = callback
    try {
        const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@danngo-space-db.kacumve.mongodb.net/danngo-space-db?retryWrites=true&w=majority&ssl=true`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
            sslValidate: true,
            tlsAllowInvalidCertificates: false,
        });
        await client.connect();
        db = client.db("danngo-space-db");
        console.log("Successfully connected to the database!");
        cb();
    } catch (err) {
        console.error("Failed to connect to the database", err);
        process.exit(1); // Exit the process with a failure code
    }
}

export {
    db,
    connectToDB,
};
