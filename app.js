const express = require("express");
const app = express();

//Axios to handle get request
const axios = require("axios");

app.use(express.json());

//get request for tests
app.get("/okay", (req, res) => {
  res.send("okay");
});

//main endpoint for get requests
//contains additional get function
//function sends get request to itunes API
//function send the data back to the react app
//first call does not contain attributes
//second call is used if attributes are specified
app.get("/media", (req, res) => {
  if (req.query.attribute == "other") {
    axios
      .get("https://itunes.apple.com/search?", {
        params: {
          term: req.query.term,
          media: req.query.media,
          limit: req.query.limit,
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  } else {
    axios
      .get("https://itunes.apple.com/search?", {
        params: {
          term: req.query.term,
          media: req.query.media,
          attribute: req.query.attribute,
          limit: req.query.limit,
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  }
});
module.exports = app;
