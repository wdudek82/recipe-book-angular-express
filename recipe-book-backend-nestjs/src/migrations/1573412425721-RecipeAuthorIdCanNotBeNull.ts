import {MigrationInterface, QueryRunner} from "typeorm";

export class RecipeAuthorIdCanNotBeNull1573412425721 implements MigrationInterface {
    name = 'RecipeAuthorIdCanNotBeNull1573412425721'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "FK_afd4f74f8df44df574253a7f37b"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "authorId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "FK_afd4f74f8df44df574253a7f37b" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "FK_afd4f74f8df44df574253a7f37b"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "authorId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "FK_afd4f74f8df44df574253a7f37b" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
