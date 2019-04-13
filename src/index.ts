import express = require("express");
const app = express();

app.get("/", function(req, res) {
  console.log(req.headers);
  res.send(req.headers);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
