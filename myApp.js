let express = require("express");
let app = express();
const absolutePath = __dirname + "/views/";

//console.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
