"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    console.log(req.headers);
    res.send(req.headers);
});
app.listen(3000, function () { return console.log("Example app listening on port 3000!"); });
