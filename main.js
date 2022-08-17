const app = require("./app");

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log("api running");
    });
  } catch (err) {
    console.error(err);
  }
};
start(5000);
