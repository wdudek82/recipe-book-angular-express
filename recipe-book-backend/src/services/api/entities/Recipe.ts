import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { RecipeIngredient } from "./RecipeIngredient";

@Entity({ name: "recipes" })
export class Recipe {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => User, (user) => user.recipes)
  author!: User;

  @Column({ length: 100 })
  name!: string;

  @Column("text", { nullable: true })
  description!: string;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe,
  )
  recipeIngredients!: RecipeIngredient[];

  @Column({ nullable: true })
  image!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;

  @AfterRemove()
  onRecipeDelete() {
    this.deletedAt = new Date().toISOString();
  }
}
