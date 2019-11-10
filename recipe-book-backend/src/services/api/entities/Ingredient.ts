import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingListIngredient } from "./ShoppingListIngredient";

@Entity({ name: "ingredients" })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  name!: string;

  @Column({ nullable: true })
  image!: string;

  @OneToMany(
    () => ShoppingListIngredient,
    (shoppingListIngredient) => shoppingListIngredient.ingredient,
  )
  shoppingListIngredient!: number;
}
