import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ShoppingList } from "./ShoppingList";
import { Ingredient } from "./Ingredient";
import { Min } from "class-validator";

@Entity({ name: "shopping_lists_ingredients" })
@Index(["shoppingList", "ingredient"])
@Unique("ShoppingListAndIngredient", ["shoppingList", "ingredient"])
export class ShoppingListIngredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.id)
  shoppingList!: number;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.id)
  ingredient!: number;

  @Column({ type: "integer" })
  @Min(0)
  amount!: number;
}