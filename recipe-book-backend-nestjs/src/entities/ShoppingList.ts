import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
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

  @Column({ type: "integer" })
  userId!: number;

  @ManyToOne(() => User, (user) => user.shoppingLists)
  @JoinColumn({ name: "userId" })
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
