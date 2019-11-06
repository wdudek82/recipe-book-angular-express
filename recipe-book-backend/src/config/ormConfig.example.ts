import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sandbox",
  password: "sandbox",
  database: "sandbox",
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
