import {
  AfterRemove,
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "recipes" })
export class Recipe {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.recipes)
  author!: User;

  @Column({ length: 100, unique: true })
  name!: string;

  @Column("text", { nullable: true })
  description!: string;

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
