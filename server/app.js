const express = require("express");
const logger = require("morgan");

const routes = require("./router");
const bodyParser = require("body-parser");

function createServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/api", routes);
  app.use(
    logger("dev", {
      skip: (req, res) => process.env.NODE_ENV === "test",
    })
  );

  return app;
}

module.exports = createServer;
