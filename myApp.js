require("dotenv").config();
let express = require("express");
let app = express();
const absolutePath = __dirname + "/views/";

app.use("/public", express.static(__dirname + "/public"));
//console.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({ message: response });
});

module.exports = app;
