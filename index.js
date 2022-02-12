const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded());

const cb = "client/build"

app.use(express.static(path.resolve(__dirname, cb)));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, cb, "index.html"));
});


