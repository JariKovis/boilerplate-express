require("dotenv").config();
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
const absolutePath = __dirname + "/views/";

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("Hello Express");

app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

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
app.get("/:word/echo", (req, res) => {
  // Access the corresponding key in the req.params
  // object as defined in the endpoint
  // OR use destructuring to get multiple parameters
  const { word } = req.params;
  console.log(word);
  // Send the req.params object as a JSON Response
  res.json({
    echo: word,
  });
});

app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.post("/name", function (req, res) {
  var firstName = req.body.first;
  var lastName = req.body.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.body;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.get(
  "/user",
  function (req, res, next) {
    req.user = getTheUserSync(); // Hypothetical synchronous operation
    next();
  },
  function (req, res) {
    res.send(req.user);
  },
);
app.get(
  "/user",
  function (req, res, next) {
    req.user = getTheUserSync(); // Hypothetical synchronous operation
    next();
  },
  function (req, res) {
    res.send(req.user);
  },
);
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString(); // Hypothetical synchronous operation
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  },
);

module.exports = app;
