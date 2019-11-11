import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: "",
  port: 5432,
  username: "",
  password: "",
  database: "",
  synchronize: false,
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
