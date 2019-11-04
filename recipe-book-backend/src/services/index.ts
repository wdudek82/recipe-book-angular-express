import { Request, Response } from "express";
import { Route } from "../util";
// import { exampleRoutes } from "./example/routes";

// define a route handler for the default home page
const rootRoute: Route = {
  path: "/",
  method: "get",
  handler: async (req: Request, res: Response) => {
    res.send("Hello, Universe!");
  },
};

const routes: Route[] = [rootRoute];

export default routes;
