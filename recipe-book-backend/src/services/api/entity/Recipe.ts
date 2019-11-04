import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { User } from "./User";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => User, (user) => user.recipes)
  author!: User;

  @Column({ length: 100 })
  name!: string;

  @Column("text", { nullable: true })
  description!: string;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.recipes)
  @JoinTable({ name: "recipe_ingredient" })
  ingredients!: Ingredient[];

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;
}
