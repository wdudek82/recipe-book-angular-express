import express, { Express } from "express";
import * as http from "http";
import { Server } from "http";
import { applyMiddleware, applyRoutes } from "./util";
import middleware from "./middleware";
import routes from "./services";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import errorHandlers from "./middleware/errorHandlers";

const ormConfig = require("./config/ormConfig");

process.on("uncaughtException", (e) => {
  // TODO: replace with a logger instance
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});


function startServer() {
  dotenv.config();

  const { SERVER_PORT = 8000 } = process.env;

  const app: Express = express();

  // serve static content
  // app.use(express.static("public"));

  applyMiddleware(middleware, app);
  applyRoutes(routes, app);
  // applyMiddleware(errorHandlers, app);

  const server: Server = http.createServer(app);

  server.listen(SERVER_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
  });
}

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection(ormConfig)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Updating DB tables...");

    startServer();
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log("TypeORM connection error:", error)
  });
