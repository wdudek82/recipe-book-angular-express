import { Route } from "../../util";
import { Request, Response } from "express";
import { getIngredients, getRecipes, getShoppingLists } from "./controllers";

export const apiRoutes: Route[] = [
  {
    path: "/api/users",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res
        .status(200)
        .json({ message: "Route not implemented yet.", route: "/api/users" });
    },
  },
  {
    path: "/api/users/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).json({
        message: "Route not implemented yet.",
        route: "/api/users/:id",
      });
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
  {
    path: "/api/recipes",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const recipes = await getRecipes();
      res
        .status(200)
        .json(recipes);
    },
  },
  {
    path: "/api/recipes/:id/ingredients",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res
        .status(200)
        .json({
          message: "Route not implemented yet.",
          route: "/api/recipes/:id/ingredients",
        });
    },
  },
  {
    path: "/api/ingredients",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const ingredients = await getIngredients();
      console.log(ingredients);

      res.status(200).json(ingredients);
    },
  },
  {
    path: "/api/ingredients/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).json({
        message: "Route not implemented yet.",
        route: "/api/ingredients",
      });
    },
  },
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
