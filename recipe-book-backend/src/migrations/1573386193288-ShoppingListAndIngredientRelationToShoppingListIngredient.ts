import {MigrationInterface, QueryRunner} from "typeorm";

export class ShoppingListAndIngredientRelationToShoppingListIngredient1573386193288 implements MigrationInterface {
    name = "ShoppingListAndIngredientRelationToShoppingListIngredient1573386193288";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "shopping_lists_ingredients" ADD COLUMN "amount" INTEGER NOT NULL`);
        // await queryRunner.query(`CREATE TABLE "shopping_lists_ingredients" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "shoppingListId" integer, "ingredientId" integer, CONSTRAINT "ShoppingListAndIngredient" UNIQUE ("shoppingListId", "ingredientId"), CONSTRAINT "PK_a245a6fa935a9d3afcb6d217a14" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_c628e731da5da68d9922913077" ON "shopping_lists_ingredients" ("shoppingListId", "ingredientId") `, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ADD CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists_ingredients" ADD CONSTRAINT "FK_097a709950329fd7db41e8ea757" FOREIGN KEY ("shoppingListId") REFERENCES "shopping_lists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists_ingredients" ADD CONSTRAINT "FK_73512ea9f1143187973ef3af7b6" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`ALTER TABLE "shopping_lists_ingredients" DROP CONSTRAINT "FK_73512ea9f1143187973ef3af7b6"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists_ingredients" DROP CONSTRAINT "FK_097a709950329fd7db41e8ea757"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" DROP CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_c628e731da5da68d9922913077"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists_ingredients" DROP COLUMN "amount"`);
    }

}
