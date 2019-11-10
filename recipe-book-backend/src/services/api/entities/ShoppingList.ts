import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { ShoppingListIngredient } from "./ShoppingListIngredient";

@Entity({ name: "shopping_lists" })
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.shoppingLists)
  user!: User;

  // TODO: add new entity for intermediate table shopping_lists_ingredients
  // with additional column "amount" that will store information
  // on number of ingredients of each type was added to the list

  @OneToMany(
    () => ShoppingListIngredient,
    (shoppingListIngredient) => shoppingListIngredient.shoppingList,
  )
  shoppingListIngredient!: number;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;

  @AfterRemove()
  onShoppingListDelete() {
    this.deletedAt = new Date().toISOString();
  }
}
