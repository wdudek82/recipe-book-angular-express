import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Recipe } from "./Recipe";
import { ShoppingList } from "./ShoppingList";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 30 })
  firstName!: string;

  @Column({ length: 30 })
  lastName!: string;

  @Column()
  age!: number;

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  recipes!: Recipe;

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
  shoppingLists!: ShoppingList[];

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;
}
