import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";
import { ShoppingList } from "./ShoppingList";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  name!: string;

  @Column()
  amount!: number;

  @ManyToMany(() => Recipe, (recipe) => recipe.ingredients)
  recipes!: Recipe[];

  @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.ingredients)
  shoppingLists!: ShoppingList[];
}
