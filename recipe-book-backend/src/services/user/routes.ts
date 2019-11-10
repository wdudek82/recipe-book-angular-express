import { Route } from "../../util";
import { Request, Response } from "express";
import { getUserById, getUsers } from "./controllers";

export const userRoutes: Route[] = [
  {
    path: "/api/users",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const users = await getUsers();
      res.status(200).json(users);
    },
  },
  {
    path: "/api/users/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const id = parseInt(req.params.id, 10);
      const user = await getUserById(id);
      res.status(200).json(user);
    },
  },
  {
    path: "/api/users/:id/recipes",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).json({
        message: "Route not implemented yet.",
        route: "/api/users/:id/recipes",
      });
    },
  },
  {
    path: "/api/users/:id/shopping-lists",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).json({
        message: "Route not implemented yet.",
        route: "/api/users/:id/recipes",
      });
    },
  },
];