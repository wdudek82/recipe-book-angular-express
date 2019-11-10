import express, { Express } from "express";
import * as http from "http";
import { Server } from "http";
import { applyMiddleware, applyRoutes } from "./util";
import middleware from "./middleware";
import routes from "./services";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";

const ormConfig = require("./config/ormConfig");

function startServer() {
  dotenv.config();

  const { SERVER_PORT = 8000 } = process.env;

  const app: Express = express();

  applyMiddleware(middleware, app);
  applyRoutes(routes, app);

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
