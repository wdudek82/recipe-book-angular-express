import { getRepository } from "typeorm";
import { Ingredient, Recipe, ShoppingList, User } from "../../entities";

export function getUsers() {
  return getRepository(User).find({
    relations: ["recipes", "shoppingLists"],
  });
}

export async function getUserById(id: number) {
  console.log("get user by id:", id);
  const user = await getRepository(User).findOne(
    { id },
    { relations: ["recipes", "shoppingLists"] },
  );

  if (!user) {
    return {};
  }
  return user;
}

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
