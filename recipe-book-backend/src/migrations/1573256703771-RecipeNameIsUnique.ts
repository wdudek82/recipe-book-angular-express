import {MigrationInterface, QueryRunner} from "typeorm";

export class RecipeNameIsUnique1573256703771 implements MigrationInterface {
    name = "RecipeNameIsUnique1573256703771";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "recipe_name_unique" UNIQUE ("name")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "recipe_name_unique"`, undefined);
    }
}
