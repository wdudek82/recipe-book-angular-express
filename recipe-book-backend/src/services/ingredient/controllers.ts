import { getRepository } from "typeorm";
import { Ingredient } from "../../entities";

export function getIngredients() {
  return getRepository(Ingredient).find();
}

export async function getIngredientById(id: number) {
  const ingredientRepository = await getRepository(Ingredient);
  const ingredient = await ingredientRepository.findOne({ id });
  if (!ingredient) {
    return {};
  }
  return ingredient;
}
