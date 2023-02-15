const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded());

const cb = "client/build";
app.use(express.static(path.resolve(__dirname, cb)));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, cb, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('App is running');
})
