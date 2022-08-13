const express = require("express");
const app = express();
const PORT = 5000;
const music = require("./routes/music");
const media = require("./routes/media");

app.get("/apple", (req, res) => {
  res.send(["You've reached apple-search-server"]);
});

app.use("/*", media);

app.listen(PORT, () => {
  console.log("Server running on port 5000!");
});
