//import express library and set the port on which to listen
const express = require("express");
const app = express();
const PORT = 5000;

//use helmet to secure the express app
const helmet = require("helmet");
app.use(helmet());

//define the endpoint for get requests
const endPoint = "https://itunes.apple.com/search";

//import fetch method from node-fetch module
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.get("/tester", (req, res) => {
  res.send("okay");
});

//recieve requests here and use params to create a new fetch request to the itunes search API
app.get("/media", (req, res) => {
  fetch(
    endPoint +
      "?term=" +
      req.headers.term +
      "&media=" +
      req.headers.media +
      "&attribute=" +
      req.headers.attribute +
      "&limit=15"
  )
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

//set server to listen on the defined port
app.listen(PORT, () => {
  console.log("Server running on port 5000!");
});
