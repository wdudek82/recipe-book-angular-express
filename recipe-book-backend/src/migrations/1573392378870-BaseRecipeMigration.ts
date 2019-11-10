import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseRecipeMigration1573392378870 implements MigrationInterface {
    name = 'BaseRecipeMigration1573392378870'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "recipes" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_dcf93c3e497af5c56bc8312be80" UNIQUE ("name"), CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "recipes"`, undefined);
    }

}
