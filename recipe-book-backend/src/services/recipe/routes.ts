import { Route } from "../../util";
import { Request, Response } from "express";
import { getRecipeById, getRecipes } from "./controllers";

export const recipeRoutes: Route[] = [
  {
    path: "/api/recipes",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const recipes = await getRecipes();
      res.status(200).json(recipes);
    },
  },
  {
    path: "/api/recipes/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const id = parseInt(req.params.id, 10);
      const recipe = await getRecipeById(id);
      res.status(200).json(recipe);
    },
  },
];
