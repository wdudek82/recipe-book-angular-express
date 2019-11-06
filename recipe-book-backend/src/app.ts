import express, { Express } from "express";
import * as http from "http";
import { Server } from "http";
import { applyMiddleware, applyRoutes } from "./util";
import middleware from "./middleware";
import routes from "./services";
import dotenv from "dotenv";
import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";

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

const ormConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "recipe_book",
  password: "recipe_book",
  database: "recipe_book",
  synchronize: true,
  logging: false,
  entities: ["src/services/**/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/services/**/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection(ormConfig)
  .then(async () => {
    // eslint-disable-next-line no-console
    console.log("Updating DB tables...");

    startServer();
  })
  .catch((error) => console.log("TypeORM connection error:", error));
