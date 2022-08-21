const app = require("./app");
const path = require("path");
const express = require("express");

//path to react app
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//Helmet to help secure the express server
const helmet = require("helmet");
app.use(helmet());

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log("api running");
    });
  } catch (err) {
    console.error(err);
  }
};
start(process.env.PORT || 3000);
