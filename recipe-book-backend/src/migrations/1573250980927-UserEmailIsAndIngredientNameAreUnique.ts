import {MigrationInterface, QueryRunner} from "typeorm";

export class UserEmailIsUnique1573250980927 implements MigrationInterface {
    name = "UserEmailIsUnique1573250980927";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "email_unique" UNIQUE ("email")`, undefined);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD CONSTRAINT "name_unique" UNIQUE ("name")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "email_unique"`, undefined);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP CONSTRAINT "name_unique"`, undefined);
    }

}
