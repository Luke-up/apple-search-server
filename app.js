const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("okay");
});

app.get("/media", (req, res) => {
  if (req.query.term) {
    axios
      .get("https://itunes.apple.com/search?", {
        params: {
          term: req.query.term,
          limit: req.query.limit,
          media: req.query.media,
          attribute: req.query.attribute,
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  } else {
    res.send(req);
  }
});
module.exports = app;
