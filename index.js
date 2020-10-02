const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 8080;

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
