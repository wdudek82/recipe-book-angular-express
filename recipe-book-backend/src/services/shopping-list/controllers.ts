import { getRepository } from "typeorm";
import { ShoppingList } from "../../entities";

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
