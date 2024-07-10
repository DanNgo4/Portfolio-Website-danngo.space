import { MongoClient } from "mongodb";

let db;

async function connectToDB(cb) {    // callback
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    db = client.db("danngo-space-db");
    cb();
}

export {
    db,
    connectToDB,
};