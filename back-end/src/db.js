import { MongoClient } from "mongodb";

let db;

async function connectToDB(cb) {    // callback
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@danngo-space-db.kacumve.mongodb.net/?retryWrites=true&w=majority&appName=danngo-space-db`);
    await client.connect();
    db = client.db("danngo-space-db");
    cb();
}

export {
    db,
    connectToDB,
};