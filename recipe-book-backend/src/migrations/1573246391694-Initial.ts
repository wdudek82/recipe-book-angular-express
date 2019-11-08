import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1573246391694 implements MigrationInterface {
    name = "Initial1573246391694";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "recipe_ingredient" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "recipeId" integer, "ingredientId" integer, CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(30) NOT NULL, "lastName" character varying(30) NOT NULL, "age" integer NOT NULL, "email" character varying(50), "image" character varying, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "shopping_list" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_87d9431f2ea573a79370742b474" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "image" character varying, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "shopping_list_ingredient" ("shoppingListId" integer NOT NULL, "ingredientId" integer NOT NULL, CONSTRAINT "PK_6585abf0b61e5cb8b3499593485" PRIMARY KEY ("shoppingListId", "ingredientId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_86d0be6baaffe4c90be389d95c" ON "shopping_list_ingredient" ("shoppingListId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_38d74eb744b774534f7cf0ed1c" ON "shopping_list_ingredient" ("ingredientId") `, undefined);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_1ad3257a7350c39854071fba211" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_2879f9317daa26218b5915147e7" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_list" ADD CONSTRAINT "FK_38e60f213f35fb8fe51d3bf41e4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_list_ingredient" ADD CONSTRAINT "FK_86d0be6baaffe4c90be389d95c5" FOREIGN KEY ("shoppingListId") REFERENCES "shopping_list"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_list_ingredient" ADD CONSTRAINT "FK_38d74eb744b774534f7cf0ed1cf" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "shopping_list_ingredient" DROP CONSTRAINT "FK_38d74eb744b774534f7cf0ed1cf"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_list_ingredient" DROP CONSTRAINT "FK_86d0be6baaffe4c90be389d95c5"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_list" DROP CONSTRAINT "FK_38e60f213f35fb8fe51d3bf41e4"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_2879f9317daa26218b5915147e7"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_1ad3257a7350c39854071fba211"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_38d74eb744b774534f7cf0ed1c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_86d0be6baaffe4c90be389d95c"`, undefined);
        await queryRunner.query(`DROP TABLE "shopping_list_ingredient"`, undefined);
        await queryRunner.query(`DROP TABLE "ingredient"`, undefined);
        await queryRunner.query(`DROP TABLE "shopping_list"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe_ingredient"`, undefined);
    }

}
