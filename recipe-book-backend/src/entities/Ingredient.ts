import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingListIngredient } from "./ShoppingListIngredient";
import { RecipeIngredient } from "./RecipeIngredient";

@Entity({ name: "ingredients" })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  name!: string;

  @Column({ nullable: true })
  image!: string;

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.ingredient)
  recipeIngredients!: RecipeIngredient[];

  @OneToMany(
    () => ShoppingListIngredient,
    (shoppingListIngredient) => shoppingListIngredient.ingredient,
  )
  shoppingListIngredient!: ShoppingListIngredient[];
}
