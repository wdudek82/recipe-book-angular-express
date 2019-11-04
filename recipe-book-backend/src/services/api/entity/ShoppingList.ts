import {
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

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.shoppingLists)
  user!: User;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.shoppingLists)
  @JoinTable({ name: "shopping_list_ingredient" })
  ingredients!: Ingredient[];

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;
}
