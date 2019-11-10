import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ type: "integer", nullable: true })
  authorId!: number;

  @ManyToOne(() => User, (user) => user.recipes)
  @JoinColumn({ name: "authorId" })
  author!: User;

  @Column({ length: 100, unique: true })
  name!: string;

  @Column("text", { nullable: true })
  description!: string;

  @Column({ nullable: true })
  image!: string;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe,
  )
  recipeIngredients!: RecipeIngredient[];

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
