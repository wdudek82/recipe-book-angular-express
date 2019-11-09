import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingList } from "./ShoppingList";

@Entity({ name: "ingredients" })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  name!: string;

  @Column({ nullable: true })
  image!: string;

  @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.ingredients)
  shoppingLists!: ShoppingList[];
}
