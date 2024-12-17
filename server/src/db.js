import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@danngo-space-db.tdwcvid.mongodb.net/?retryWrites=true&w=majority&appName=danngo-space-db`;
// uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToDB(cb) {    // cb = callback
    try {
        await client.connect();
        db = await client.db("danngo-space-db");
        cb();
    } catch (e) {
        console.error("Failed to connect to the database", e);
        process.exit(1); // Exit the process with a failure code
    }
}

export {
    db,
    connectToDB,
};
