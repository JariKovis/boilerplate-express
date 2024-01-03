let express = require("express");
let app = express();
const absolutePath = __dirname + "/views/";

app.use("/public", express.static(__dirname + "/public"));
//console.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
