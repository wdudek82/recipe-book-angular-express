import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseIngredientMigration1573393646842 implements MigrationInterface {
    name = 'BaseIngredientMigration1573393646842'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "ingredients" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "image" character varying, CONSTRAINT "UQ_a955029b22ff66ae9fef2e161f8" UNIQUE ("name"), CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "ingredients"`, undefined);
    }

}
