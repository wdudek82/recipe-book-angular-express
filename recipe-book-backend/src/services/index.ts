import { Request, Response } from "express";
import { Route } from "../util";
import { userRoutes } from "./user/routes";
import { recipeRoutes } from "./recipe/routes";
import { shoppingListRoutes } from "./shopping-list/routes";
import { ingredientRoutes } from "./ingredient/routes";

// define a route handler for the default home page
const rootRoute: Route = {
  path: "/",
  method: "get",
  handler: async (req: Request, res: Response) => {
    res.send("Hello, Universe!");
  },
};

const routes: Route[] = [
  rootRoute,
  ...userRoutes,
  ...recipeRoutes,
  ...shoppingListRoutes,
  ...ingredientRoutes,
];

export default routes;
