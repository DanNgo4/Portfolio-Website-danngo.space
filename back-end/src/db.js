import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@danngo-space-db.kacumve.mongodb.net/?retryWrites=true&w=majority&appName=danngo-space-db`;
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
    } catch (err) {
        console.error("Failed to connect to the database", err);
        process.exit(1); // Exit the process with a failure code
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export {
    db,
    connectToDB,
};
