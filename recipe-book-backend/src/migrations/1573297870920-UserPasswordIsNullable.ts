import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPasswordIsNullable1573297870920 implements MigrationInterface {
    name = "UserPasswordIsNullable1573297870920";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL`, undefined);
    }

}
