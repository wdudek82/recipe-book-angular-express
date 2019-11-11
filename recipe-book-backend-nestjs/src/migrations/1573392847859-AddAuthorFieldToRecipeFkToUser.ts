import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAuthorFieldToRecipeFkToUser1573392847859 implements MigrationInterface {
    name = 'AddAuthorFieldToRecipeFkToUser1573392847859'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes" ADD "authorId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "FK_afd4f74f8df44df574253a7f37b" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "FK_afd4f74f8df44df574253a7f37b"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "authorId"`, undefined);
    }

}
