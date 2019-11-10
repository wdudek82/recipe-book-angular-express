import { getRepository } from "typeorm";
import { Ingredient, Recipe, ShoppingList } from "../../entities";

export function getIngredients() {
  return getRepository(Ingredient).find();
}

export function getRecipes() {
  return getRepository(Recipe).find({
    join: {
      alias: "recipe",
      leftJoinAndSelect: {
        recipeIngredients: "recipe.recipeIngredients",
        ingredients: "recipeIngredients.ingredient",
      },
    },
  });
}

export function getShoppingLists() {
  return getRepository(ShoppingList).find({
    join: {
      alias: "shoppingList",
      leftJoinAndSelect: {
        shoppingListIngredients: "shoppingList.shoppingListIngredient",
        ingredients: "shoppingListIngredients.ingredient",
      },
    },
  });
}
