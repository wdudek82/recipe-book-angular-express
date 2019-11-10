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

  @OneToMany(
    () => ShoppingListIngredient,
    (shoppingListIngredient) => shoppingListIngredient.shoppingList,
  )
  shoppingListIngredient!: ShoppingListIngredient[];

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
