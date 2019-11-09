import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveRecipeIngredientFieldFromRecipeAndIngredient1573327589536 implements MigrationInterface {
    name = "RemoveRecipeIngredientFieldFromRecipeAndIngredient1573327589536";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" ADD CONSTRAINT "FK_c84920dabbb1b467807d663b682" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" ADD CONSTRAINT "FK_da3666d01f0d650f34d0d4df902" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" DROP CONSTRAINT "FK_c84920dabbb1b467807d663b682"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" DROP CONSTRAINT "FK_da3666d01f0d650f34d0d4df902"`, undefined);
    }

}
