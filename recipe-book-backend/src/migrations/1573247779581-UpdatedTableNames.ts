import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedTableNames1573247779581 implements MigrationInterface {
    name = "UpdatedTableNames1573247779581";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE "user" RENAME TO "users"', undefined);
        await queryRunner.query('ALTER TABLE "recipe" RENAME TO "recipes"', undefined);
        await queryRunner.query('ALTER TABLE "recipe_ingredient" RENAME TO "recipes_ingredients"', undefined);
        await queryRunner.query("ALTER TABLE shopping_list RENAME TO shopping_lists", undefined);
        await queryRunner.query('ALTER TABLE "shopping_list_ingredient" RENAME TO "shopping_lists_ingredients"', undefined);
        await queryRunner.query('ALTER TABLE "ingredient" RENAME TO "ingredients"', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE "users" RENAME TO "user"', undefined);
        await queryRunner.query('ALTER TABLE "recipes" RENAME TO "recipe"', undefined);
        await queryRunner.query('ALTER TABLE "recipes_ingredients" RENAME TO "recipe_ingredient"', undefined);
        await queryRunner.query("ALTER TABLE shopping_lists RENAME TO shopping_list", undefined);
        await queryRunner.query('ALTER TABLE "shopping_lists_ingredients" RENAME TO "shopping_list_ingredient"', undefined);
        await queryRunner.query('ALTER TABLE "ingredients" RENAME TO "ingredient"', undefined);
    }

}
