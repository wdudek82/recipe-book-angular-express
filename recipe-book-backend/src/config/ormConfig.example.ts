import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "recipe_book",
  password: "recipe_book",
  database: "recipe_book",
  synchronize: true,
  logging: false,
  entities: ["../services/**/entity/**/*.ts"],
  migrations: ["../migration/**/*.ts"],
  subscribers: ["../subscriber/**/*.ts"],
  cli: {
    entitiesDir: "../services/**/entity",
    migrationsDir: "../migration",
    subscribersDir: "../subscriber",
  },
};
