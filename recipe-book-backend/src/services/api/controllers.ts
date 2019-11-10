import { getRepository } from "typeorm";
import { Ingredient, Recipe, ShoppingList, User } from "../../entities";

export function getUsers() {
  return getRepository(User).find({
    relations: ["recipes", "shoppingLists"],
  });
}

export async function getUserById(id: number) {
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

export async function getRecipeById(id: number) {
  const recipeRepository = getRepository(Recipe);
  const recipe = await recipeRepository.findOne(
    { id },
    {
      // relations: ["recipeIngredients"],
      join: {
        alias: "recipe",
        leftJoinAndSelect: {
          recipeIngredients: "recipe.recipeIngredients",
          ingredients: "recipeIngredients.ingredient",
        },
      },
    },
  );
  if (!recipe) {
    return {};
  }
  return recipe;
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
