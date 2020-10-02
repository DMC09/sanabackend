const express = require("express");
const app = express();
const cors = require('cors')
const importData = require("./data.json");
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("hello world!");
  console.log("this is a test for the base route");
});
app.get("/players", (req, res) => {
  res.send(importData);
  console.log("this is a test for the players route");
});

app.post("/post", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`example app is listenining port ${port}`);
});
