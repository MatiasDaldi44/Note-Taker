const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static('./public'));

app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "/public/index.html")) });
app.get("/notes", (req, res) => { res.sendFile(path.join(__dirname, "/public/notes.html")) });
app.get("/api/notes", (req, res) => { fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => { return res.json(JSON.parse(data)) }) });

app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});