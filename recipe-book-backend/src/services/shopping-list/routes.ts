import { Route } from "../../util";
import { Request, Response } from "express";
import { getShoppingLists } from "./controllers";

export const shoppingListRoutes: Route[] = [
  {
    path: "/api/shopping-lists",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const shoppingLists = await getShoppingLists();
      res.status(200).json(shoppingLists);
    },
  },
  {
    path: "/api/shopping-lists/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).json({
        message: "Route not implemented yet.",
        route: "/api/shopping-lists",
      });
    },
  },
];
