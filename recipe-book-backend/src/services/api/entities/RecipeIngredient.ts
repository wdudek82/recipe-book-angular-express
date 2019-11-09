import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";
import { Min } from "class-validator";

@Entity({ name: "recipes_ingredients" })
export class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.id)
  recipe!: number;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.id)
  ingredient!: number;

  @Column({ type: "integer"})
  @Min(0)
  amount!: number;
}
