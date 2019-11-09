import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Ingredient } from "./Ingredient";

@Entity({ name: "shopping_lists" })
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.shoppingLists)
  user!: User;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.shoppingLists)
  @JoinTable({ name: "shopping_list_ingredient" })
  ingredients!: Ingredient[];

  // TODO: add new entity for intermediate table shopping_lists_ingredients
  // with additional column "amount" that will store information
  // on number of ingredients of each type was added to the list

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
