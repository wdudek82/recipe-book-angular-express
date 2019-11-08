import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Recipe } from "./Recipe";
import { ShoppingList } from "./ShoppingList";
import { IsEmail } from "class-validator";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 30 })
  firstName!: string;

  @Column({ length: 30 })
  lastName!: string;

  @Column()
  age!: number;

  @Column({ length: 50, nullable: true })
  @IsEmail()
  email!: string;

  @Column({ nullable: true })
  image!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  recipes!: Recipe;

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
  shoppingLists!: ShoppingList[];

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;

  @AfterRemove()
  onUserDelete() {
    this.deletedAt = new Date().toISOString();
  }
}
