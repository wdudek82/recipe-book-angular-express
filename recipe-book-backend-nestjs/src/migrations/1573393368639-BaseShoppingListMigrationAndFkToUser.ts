import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseShoppingListMigrationAndFkToUser1573393368639 implements MigrationInterface {
    name = 'BaseShoppingListMigrationAndFkToUser1573393368639'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "shopping_lists" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_9289ace7dd5e768d65290f3f9de" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ADD CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "shopping_lists" DROP CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8"`, undefined);
        await queryRunner.query(`DROP TABLE "shopping_lists"`, undefined);
    }

}
