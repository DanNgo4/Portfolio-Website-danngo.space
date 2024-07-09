import express from "express";

const app = express();

app.post("/hello", function (req, res) {
    res.send("Hello!");
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});