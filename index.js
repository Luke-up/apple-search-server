const express = require("express");
const app = express();
const PORT = 5000;

const endPoint = "https://itunes.apple.com/search";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.get("/*", (req, res) => {
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

app.listen(PORT, () => {
  console.log("Server running on port 5000!");
});
