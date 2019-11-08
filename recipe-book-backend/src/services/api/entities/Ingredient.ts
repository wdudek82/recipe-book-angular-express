import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingList } from "./ShoppingList";
import { RecipeIngredient } from "./RecipeIngredient";

@Entity({ name: "ingredients" })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  name!: string;

  @Column({ nullable: true })
  image!: string;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.ingredient,
  )
  recipeIngredients!: RecipeIngredient[];

  @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.ingredients)
  shoppingLists!: ShoppingList[];
}
