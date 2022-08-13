const express = require("express");
const router = express.Router();

const endPoint = "https://itunes.apple.com/search";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/", (req, res) => {
  fetch(
    endPoint +
      "?term=" +
      req.headers.term +
      "&media=" +
      req.headers.media +
      "&attribute=" +
      req.headers.attribute +
      "&limit=10"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(req.headers.term);
      res.send(data);
    });
});

module.exports = router;
