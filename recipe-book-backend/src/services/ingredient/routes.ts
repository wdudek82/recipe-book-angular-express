import { Route } from "../../util";
import { Request, Response } from "express";
import { getIngredientById, getIngredients } from "./controllers";

export const ingredientRoutes: Route[] = [
  {
    path: "/api/ingredients",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const ingredients = await getIngredients();
      res.status(200).json(ingredients);
    },
  },
  {
    path: "/api/ingredients/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const id = parseInt(req.params.id, 10);
      const ingredient = await getIngredientById(id);
      res.status(200).json(ingredient);
    },
  },
];
