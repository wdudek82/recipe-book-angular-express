import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseUserMigration1573392124635 implements MigrationInterface {
    name = 'BaseUserMigration1573392124635'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "firstName" character varying(30) NOT NULL, "lastName" character varying(30) NOT NULL, "age" integer NOT NULL, "email" character varying(50), "image" character varying, "password" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
