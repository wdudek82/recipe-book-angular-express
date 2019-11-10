import { getRepository } from "typeorm";
import { Recipe } from "../../entities";

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
