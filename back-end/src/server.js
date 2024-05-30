import express from "express";

const app = express();
app.use(express.json());

app.post("/hello", (req, res) => {
    res.send(`Hello ${req.body.name}!`);
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});