import { getRepository } from "typeorm";
import { Ingredient, Recipe, ShoppingList } from "./entity";

export function getIngredients() {
  return getRepository(Ingredient).find();
}

export function getRecipes() {
  return getRepository(Recipe).find({
    join: {
      alias: "recipe",
      leftJoinAndSelect: {
        "recipeIngredients": "recipe.recipeIngredients",
        "ingredients": "recipeIngredients.ingredient",
      },
    },
  });
}

export function getShoppingLists() {
  return getRepository(ShoppingList).find({
    relations: ["ingredients"],
  });
}
