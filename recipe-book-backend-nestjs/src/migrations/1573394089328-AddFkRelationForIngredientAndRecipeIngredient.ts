import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFkRelationForIngredientAndRecipeIngredient1573394089328 implements MigrationInterface {
    name = 'AddFkRelationForIngredientAndRecipeIngredient1573394089328'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "recipes_ingredients" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "recipeId" integer, "ingredientId" integer, CONSTRAINT "PK_128176fc97ba8afde4b0befd9ab" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" ADD CONSTRAINT "FK_c84920dabbb1b467807d663b682" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" ADD CONSTRAINT "FK_da3666d01f0d650f34d0d4df902" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" DROP CONSTRAINT "FK_da3666d01f0d650f34d0d4df902"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" DROP CONSTRAINT "FK_c84920dabbb1b467807d663b682"`, undefined);
        await queryRunner.query(`DROP TABLE "recipes_ingredients"`, undefined);
    }

}
