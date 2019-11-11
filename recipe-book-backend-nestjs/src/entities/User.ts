import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn, RelationId,
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

  @Column({ length: 50, nullable: true, unique: true })
  @IsEmail()
  email!: string;

  @Column({ nullable: true })
  image!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  recipes!: Recipe[];

  // To show only recipe ids
  // @RelationId((self: User) => self.recipes)
  // recipeIds!: number[];

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
  shoppingLists!: ShoppingList[];

  @RelationId((self: User) => self.shoppingLists)
  shoppingListIds!: number[];

  // TODO: at some point has to be changed to nullable = false
  @Column({ nullable: true })
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
